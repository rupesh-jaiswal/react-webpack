## React Boilerplate

### Setup

Make sure your NPM and Node versions are up to date.

```bash
cp .env.shadow .env # initialize environment configuration
brew install yarn # make sure you have yarn
yarn install # installs all package.json dependencies
npm start # starts dev server
```

### Development

#### Adding new dependencies
To add a new dependency:

```
yarn add {dependency}
```

Then, be sure to add/commit the yarn.lock file.

#### Tasks

* `npm start` runs local development server at localhost:8080
* `npm test` to run the linter and unit tests
* `npm run lint` to run only the linter
* `npm run test:unit` to run only the unit tests
* `npm run watch` to run unit tests every time a change is saved
* `npm run bundle` bundles all application js into build/bundle.js

Note: to see all available tasks, run `npm run`.

