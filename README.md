# Hotel Yankee Lima

## Development

Requires [Docker](https://docs.docker.com/get-docker/).

```sh
docker compose up
```

Open [http://localhost:1313](http://localhost:1313). Hugo watches for changes and reloads automatically.

## Linting

Requires Node.js. Install dependencies once:

```sh
npm install
```

Check for errors:

```sh
npm run lint
```

Auto-fix safe issues:

```sh
npm run lint:fix
```

VS Code formats JS and CSS on save automatically via the [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) extension (recommended in `.vscode/extensions.json`).

## Build

```sh
docker compose run --rm hugo --minify
```

Output is written to `public/`.

## Deployment

Pushing to `build` deploys automatically via GitHub Actions.
