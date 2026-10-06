# Deploy QueueLess on Render

The repository includes a Render Blueprint at `render.yaml`. It defines a FastAPI backend, a Next.js frontend, and a PostgreSQL database in Singapore. The services are configured for Render's free tier for demonstration use.

## Deploy

1. Push this repository to GitHub. Confirm that `backend/.env`, `frontend/.env.local`, and other credential files are not committed.
2. Sign in to Render and choose **New + → Blueprint**.
3. Connect the GitHub repository and select the branch to deploy.
4. Review the Blueprint resources (`queueless-api`, `queueless-web`, and `queueless-db`) and approve their creation.
5. Wait for the database and both services to finish deploying.
6. Open the `queueless-web` service URL. The frontend obtains the backend host from the Blueprint configuration.
7. Check the backend health URL (the API service URL ending in `/`) and confirm it reports QueueLess as running.

Render service names must stay `queueless-api` and `queueless-web` unless the corresponding `fromService` references in `render.yaml` are changed to match.

## Notes

- The free PostgreSQL database is temporary and may expire after Render's free database period. Use a paid database plan and configure backups for persistent data.
- Free web services may sleep when idle and take time to wake on the next request.
- The fixed OTP (`123456`) is for demonstration only. Do not use real patient data; authentication, authorization, and production health-data safeguards are not implemented.
- This deploy configuration does not commit database credentials. Render supplies the database connection string through the `DATABASE_URL` environment variable.
