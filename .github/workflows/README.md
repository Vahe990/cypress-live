# E2E Tests Workflow

Automated Cypress E2E tests that run hourly via GitHub Actions.

## Schedule

- Runs every hour at minute :00
- Only runs on the default branch (`main`)
- GitHub may delay cron jobs by a few minutes during high load
- Automatically disabled after 60 days of no repo activity

## Manual Run

1. Go to the **Actions** tab in GitHub
2. Select **"E2E Tests"** on the left
3. Click **"Run workflow"** → choose branch → **"Run workflow"**

Or via CLI:

```bash
gh workflow run e2e-tests.yml
```

## Stop / Disable

**Cancel a running job:**

- Actions tab → click the running workflow → **"Cancel workflow"**

```bash
gh run cancel <run-id>
```

**Disable the scheduled workflow:**

- Actions tab → **"E2E Tests"** → `...` menu → **"Disable workflow"**

```bash
gh workflow disable e2e-tests.yml
```

**Re-enable:**

```bash
gh workflow enable e2e-tests.yml
```

## Viewing Results

- **Actions** tab shows pass/fail for each run
- Click a run → **"Run Cypress E2E tests"** step for full output
- Failed runs show a red X on the repo

## Useful CLI Commands

```bash
gh run list --workflow=e2e-tests.yml   # List recent runs
gh run view <run-id>                   # View run details
gh run watch <run-id>                  # Watch a run in real-time
```
