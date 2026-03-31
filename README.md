# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## GitHub Docker Release Pipeline

This repository includes a GitHub Actions workflow at `.github/workflows/docker-release.yml`.

On every push to `main`, it will:

1. Build the project using the existing `Dockerfile`
2. Publish a Docker image to GitHub Container Registry (GHCR)
3. Upload an `image-release` artifact containing image tags and digest

Published image name:

```bash
ghcr.io/carl-egge/td-nuxtwind-frontend:latest
```

The workflow also publishes a SHA tag for each commit:

```bash
ghcr.io/carl-egge/td-nuxtwind-frontend:sha-<short-sha>
```

### Pull and run on your server

```bash
docker pull ghcr.io/carl-egge/td-nuxtwind-frontend:latest
docker run -d --name td-nuxtwind-frontend -p 3000:3000 --restart unless-stopped ghcr.io/carl-egge/td-nuxtwind-frontend:latest
```

If your package is private, log in first:

```bash
echo <github-token-with-read-packages> | docker login ghcr.io -u carl-egge --password-stdin
```
