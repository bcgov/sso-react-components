# SSO React Components

This library contains common react components shared by the SSO CSS app and realm registry.
See the github pages link for a storybook instance of components.

## Workflow

**Storybook**: This repository has branched-based deployments for the storybook instance. To update
storybook, merge in a feature branch to the `dev` branch.

**NPM**: Components will be published to NPM when creating a new release. To release the components
on the dev branch:

1. Merge `dev` into `main`. This will automatically bump the package version based on the commits and generate a tag for the release.
2. Create a new [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) using the generated tag.

## Adding Components

To add a component:

1. Add a new folder with the component title to `src/components`
2. Add a `<componentName>.tsx` file and `index.ts` file to the folder.
3. Export your component from `index.ts`, e.g:
   `export { default } from './NumberedContents';`
4. Add component export to `src/components/index.ts`, e.g:

```js
export { default as Accordion } from './Accordion';
export { default as NumberedContents } from './NumberedContents';
```

## Adding Stories

Add a `<Component>.stories.jsx` file to the `stories` folder
