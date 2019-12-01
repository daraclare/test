# Punk API App Coding Challenge

This Punk API App was built using a template I developed using NextJS with Typescript, Styled Components, and Jest for Unit testing.
The app was built using mobile-first techniques, uses functional React components throughout, as well as React hooks.

## How to run app

This guide assumes yarn is already installed on system, if not, please follow instructions at https://yarnpkg.com/lang/en/docs/install/#mac-stable

Run the following commands to run this app:

```sh
git clone git@github.com:daraclare/test.git

cd test

# install all node modules in the package.json file
yarn install

# start the application — this will open the app on http://localhost:3000/
yarn dev
```

The app will be running at http://localhost:3000/

## Run test

This app includes unit test, run using Jest and React Testing Library. To run tests please run `yarn test`.

## Architectural decisions

The app was built using a template I built using NextJS, a server-side rendering framework for ReactJS. The template is built using TypeScript, Styled Components and Jest for unit testing. As the template is built using NextJs, Webpack and Babel are utilised which gives the project code splitting and tree shaking out of the box.
Axios is imported as a dependency instead of using the fetch. Axios improves error catching, and removes the `.json()` step from API calls as it enables automatic JSON data transformation. Fetch is also not supported by all browsers as yet, Axios has browser support built in.

## Known issues

FOUC: A flash of unstyled content (FOUC) appears on page refresh, this matter should be dealt with.
Due to time constraits, only some of the business logic was implemented.

## Dependencies

All dependencies, both dev and prod, are listed in the `package.json` file.

## Improvements

The time to complete this app was limited due to work commitments, the app would benefit from the following improvements:
Design: No design has been implemented on this app, beyond the basics required to make the app functional.
Integration testing: The app includes unit test, but would benefit from integration testing with Cypress.
Error Boundaries: The app would be more robust if error boundaries were put in place.
FOUC: A flash of unstyled content (FOUC) appears on page refresh, this matter should be dealt with.
