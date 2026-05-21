# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
composer dev          # Start all dev processes concurrently: PHP server, queue worker, log tail, npm watch
npm run dev           # Frontend only (Laravel Mix watch)
npm run build         # Production frontend build
```

### Setup (first time)
```bash
composer setup        # Install deps, generate key, migrate, build assets
```

### Docker
```bash
cd docker && sh run.sh   # Build and start Docker environment (MySQL + Redis on localhost:8082)
```

### Testing
```bash
composer test                              # Run all PHPUnit tests
php artisan test --filter=TestClassName    # Run a single test class
php artisan test --filter=test_method_name # Run a single test method

npx cypress open      # Open Cypress interactive runner
npx cypress run       # Run Cypress headless
npx cypress run --spec "cypress/e2e/ApplyToday.cy.js"  # Run a single spec
```

## Architecture

### Stack
Laravel 12 / PHP 8.2 backend with a jQuery + Bootstrap 5 frontend. MySQL database, Redis for caching and queues, Laravel Horizon for queue management. Assets compiled by Laravel Mix (Webpack).

### External SOAP API
All loan and customer data operations go through an external SOAP service (`SERVICE_WSDL` env var). The `Soapable` trait (`app/Helpers/Soapable.php`) handles all communication: it renders an XML request from a Blade template in `resources/views/soap/`, POSTs it to the SOAP endpoint, parses the XML response, and returns it as an array. To add a new SOAP operation: create the XML template in `resources/views/soap/`, then call `$this->executeRequest(request, view, functionName, ...)` from the controller.

### Authentication
Session-based, not Sanctum. After login, `session('authorized')` is set to `true` and `session('customerId')` holds the customer ID. The `CustomerAuthenticate` middleware (`app/Http/Middleware/CustomerAuthenticate.php`) guards authenticated API routes by checking `session('authorized')`. Web routes use the standard `auth` middleware for the profile page.

### Request Flow
- **Web routes** (`routes/web.php`): Serve Blade views; wrapped in `redirectToWWW` and `CheckMobileRoute` middleware
- **API routes** (`routes/api.php`): JSON endpoints consumed by frontend JS; most are unauthenticated SOAP proxies, protected ones use `CustomerAuthenticate`

### Frontend JS
Multiple compiled entry points — each page or major component has its own JS file. Compiled outputs go to `public/js/`. Key entry points defined in `webpack.mix.js`:
- `resources/js/app.js` — global bootstrap
- `resources/js/src/components/ac-multistep-form.js` — 5-step loan application form
- `resources/js/src/components/wizard.js` — returning customer wizard
- `resources/js/src/components/bank-verification.js` — IBV/bank linking
- Helper modules live in `resources/js/src/global/` (`helper.js`, `validations.js`, `bank_helper.js`, `income_source_helper.js`)

### Multi-step Application Form
The primary conversion flow. `/apply-today` renders the form; JS in `ac-multistep-form.js` drives 5 steps (Basic Info → Address → Banking → Income → Final). On submit it calls `POST /api/apply-loan` which forwards to the external loan origination endpoint (`APPLY_LOAN_URL`). The form tracks GA events at each step via `trackGAEvent()` (defined in the app layout).

### Event Logging
All SOAP API calls are logged asynchronously to the `event_logs` table via `CreateLogEventDataJob` and `UpdateLogEventDataJob` (queue: `event-logs`). The `Event` model defines event key constants. Controlled by `EVENT_LOGGING_ENABLED`, `STORE_EVENT_LOGS_ON_DB`, and `STORE_EVENT_LOG_AS_FILE` env vars. See `GA_EVENTS.md` for GA event documentation.

### Third-party Integrations
- **HelloSign** (`industrious/hellosign-laravel`) — e-signature flow under `/esignature/*`
- **Vouched** — identity verification under `/identity-verification`; controlled by `VOUCHED_ENABLED`
- **Twilio** — SMS verification codes (`TwilioHelper`)
- **Bugsnag** — error tracking; used throughout controllers via `Bugsnag::notifyException()`
- **Decision Logic** — bank verification (IBV), triggered via `check-ibv-enabled` / `decision-logic-ibv-completed` endpoints

### Cypress Tests
Base URL is `http://localhost:8082` (Docker). Tests in `cypress/e2e/`. The `ApplyToday.cy.js` spec stubs `POST **/api/apply-loan` with `cy.intercept()` so tests run without a live SOAP backend. Follow this pattern for new specs — intercept external API calls rather than requiring real credentials.

### Key Env Variables
| Variable | Purpose |
|---|---|
| `SERVICE_WSDL` | SOAP API endpoint |
| `APPLY_LOAN_URL` | Loan origination POST target |
| `VOUCHED_ENABLED` | Toggle identity verification |
| `CONSENT_ENABLED` | Toggle consent page |
| `DEFAULT_MAX_LOAN_AMOUNT` | Slider cap (default 1400) |
| `VIP_STORE_IDS` / `VIP_TIERS_BY_LOAN_TYPE_ID` | VIP tier configuration |
| `HORIZON_BASIC_AUTH_USERNAME/PASSWORD` | Protect `/horizon` dashboard |
