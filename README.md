# Hotel Yankee Lima

## Development

Requires [Docker](https://docs.docker.com/get-docker/).

```sh
docker compose up
```

Open [http://localhost:1313](http://localhost:1313). Hugo watches for changes and reloads automatically.

## Build

```sh
docker compose run --rm hugo --minify
```

Output is written to `public/`.

## Deployment

Pushing to `build` deploys automatically via GitHub Actions.
