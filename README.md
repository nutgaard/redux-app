# Redux-app

### npm/yarn scripts

This project is created using `yarn`, but could easily be converted to use `npm`.


Scripts; 
```
yarn start      // Starts the application 
yarn start:mock // Starts the application with fetch-mocking enabled
yarn build      // Builds the application
yarn start:mock // Builds the application with fetch-mocking enabled
yarn test       // Run tests
```

### Libraries
| Library | Why |
|---------|-----|
| [react](https://github.com/facebook/react) | Self-explanatory |
| [redux](https://github.com/reduxjs/redux) | Self-explanatory |
| [react-redux](https://github.com/reduxjs/react-redux) | Connecting redux to react |
| [redux-thunk](https://github.com/reduxjs/redux-thunk) | Allowing async-actions in redux | 
| [reselect](https://github.com/reduxjs/reselect) | Creating memoized-selectors | 
| [react-intl](https://github.com/yahoo/react-intl) | React-components for I18n | 


#### Utility libraries
[yet-another-fetch-mock](https://github.com/nutgaard/yet-another-fetch-mock) is included for even better DX. 
Enables running the application completely offline, and even deploying each PR to github for easier verification.

[react-intl-bundler](https://github.com/navikt/react-intl-bundler) allows us to separate text resources into separate files,
and gives use a "type-safe" bundle which is ready to be consumed by `react-intl`. 
 

### Tools

Built using `create-react-app-typescript`, see [original readme](README_CRA.md)
