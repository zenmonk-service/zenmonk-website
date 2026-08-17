# Zenmonk Website

The official Zenmonk Solution Pvt. Ltd. website, built with Next.js and MongoDB.

## Docker quick start

Requirements: Docker Engine/Desktop with Docker Compose v2.

1. Create local configuration:

   ```bash
   cp .env.example .env
   ```

   Replace every placeholder password in `.env`. The checked-in defaults are only
   conveniences for local evaluation and must not be used for deployment.

2. Build and start the production-style stack:

   ```bash
   docker compose up --build --wait
   ```

3. Open the website at <http://localhost:3000>. Check readiness with:

   ```bash
   curl --fail http://localhost:3000/api/health
   ```

The default stack contains:

- Next.js application: port `3000`
- MongoDB: private Compose network with persistent storage
- MailHog SMTP server: private Compose network

Stop the stack without deleting MongoDB data:

```bash
docker compose down
```

Do not add `--volumes` unless you intentionally want to delete the local database.

## Development with hot reload

```bash
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build --wait
```

The development override mounts the repository into the app container and exposes
these tools only on localhost:

- MongoDB: `127.0.0.1:27017`
- MailHog SMTP: `127.0.0.1:1025`
- MailHog dashboard: <http://127.0.0.1:8025>

Dependencies and `.next` output use Docker volumes, so the bind mount does not hide
container-installed packages or write Linux artifacts into the host checkout.
If `package-lock.json` changes, refresh the dependency volume with:

```bash
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml run --rm app npm ci
```

## Optional database tools

Start Mongo Express:

```bash
docker compose --profile tools up -d mongo-express
```

Open <http://127.0.0.1:8081> and sign in with `MONGO_EXPRESS_USER` and
`MONGO_EXPRESS_PASSWORD` from `.env`. Mongo Express is an administrative tool; do
not expose it publicly.

## Sample data

The seed command deletes the existing jobs, skills, job-skill links, contacts, and
subscribers before loading sample records. Run it only against a disposable/local
database:

```bash
docker compose --profile seed run --rm seed
```

Seeding is never part of application startup.

## Deployment configuration

At minimum, replace these values in `.env` or your deployment secret manager:

- `DB_PASSWORD`
- `MONGO_ROOT_PASSWORD`
- `MONGO_EXPRESS_PASSWORD` when the tools profile is used
- `APP_URL` with the public HTTPS origin used in application-tracking emails

For real email delivery, replace the MailHog defaults with your SMTP values:

```env
MAIL_HOST=smtp.example.com
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USER=your-user
MAIL_PASSWORD=your-password
MAIL_FROM=ZenMonk Careers <careers@example.com>
```

When running the application image outside this bundled Compose stack, set
`MONGODB_URI` to use a managed MongoDB service. It takes precedence over the
individual `DB_*` variables. Do not publish the bundled MongoDB port in production.

MongoDB's root account is initialized only when the `mongodb_data` volume is empty.
The application account is created or updated by an idempotent bootstrap service on
every stack start. When reusing an existing volume, `MONGO_ROOT_USER` and
`MONGO_ROOT_PASSWORD` must still match the root account that originally created it.
For the bundled database, keep `DB_AUTH_SOURCE` equal to `DB_NAME`; the bootstrap
service creates the scoped application user in that database.

The Compose defaults are intended for local development only. A production
orchestrator must inject explicit database and SMTP secrets rather than relying on
the fallback passwords in `docker-compose.yaml`.

## Validation commands

```bash
docker compose config --quiet
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml config --quiet
npm run build
npx tsc --noEmit
```
