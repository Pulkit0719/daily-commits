# Daily Commits Automation

This repository automatically updates `temp.txt` once a day using GitHub Actions.

## How it runs

- It runs every day at **9:00 AM India Standard Time** (03:30 UTC).
- You can also run it immediately from the **Actions** tab: select **Daily repository update**, then choose **Run workflow**.
- Commits use the GitHub account identity `Pulkit0719`.

No local computer, SSH key, Task Scheduler, or cron job is required.

## Important GitHub setting

For the workflow to push commits, open this repository's **Settings → Actions → General → Workflow permissions**, select **Read and write permissions**, and save. The workflow itself requests this permission, but the repository-level setting must allow it.

## Files

- `dailyCommit.js` updates `temp.txt` with the current time.
- `.github/workflows/daily-commit.yml` schedules the run and commits the update.
