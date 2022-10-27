# Text Editor - Progressive Web App (PWA)
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description

```

This app is a text editor that allows users create notes or code snippets. 

This is a deployed Progressive Web App (PWA) that allows the user to access content, functionality and saved data with or without an internet connection. 

The user can also install this PWA locally on desktop, ipad (or similar) and mobile phones (such asn iphone or android).

```

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies), (4) Run "npm run start" to deploy webpack and the server.

## Usage

This app is a deployed solely on the back-end using Node.js, Express, Mongo, Mongoose and Insomia (for the API route testing).

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. Organized in a `client server` folder structure.
2. Application serves the backend and client via `npm run start` using Concurrently.
Uses `IndexedDB` & `Local Storage` to create an object store & includes both GET and PUT methods
3. The application works `with or without an internet connection` via a service work and static asset cache.
4. Immediately and automatically saves content in the text editor.
5. Bundled with `webpack` - javascript, CSS, HTML, images.
6. `Webpack plugins` and `idb` generate HTML & css file, service worker, a manifest.json file (`WebpackPwaManifest`) and database storage.
7. `Babel` compiles next-gen Javascript (such as arrow functions or async/await) for cross browser compatability.
8. Satisfies criteria to be installed as a `Progressive Web Application` (PWA). The web app can be installed as an icon desktop & mobile devices (such as an iPhone or Android device). Text entries are automatically saved and automatically populate when the application is re-opened (either on desktop or mobile devices).
9. `Heroku` deploy including proper build scripts for webpack application and client server architecture.

## Technology

1. `Babel:` JavaScript transcompiler mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript.
2. `Code Mirror:`  
3. `Concurrently:` NPM package that runs multiple processes, or servers, from a single command-line interface. 
4. `Express:` A text & code Editor
5. `Git/Github:` Repo and version management.
6. `Heroku:` Deployment.
7. `IndexDB & idb:` idb is a wrapper library that mirrors the IndexedDB API — a NoSQL web storage API in the browser — adding improvements making the API easier to use.
8. `Loaders/Plugins:` css-loader, style-loader, min-css-extract-plugin, html-webpack-plugin, 
9. `Webpack:` A module bundler for JavaScript that simplifies front-end web development by generating static assets from modules with dependencies and using plugins and loaders to automate certain optimization strategies.
10. `Workbox:` A set of libraries that allows you to easily power a production-ready service worker for a progressive web application.

---

## App Preview - WalkThrough Video

Demonstrates how to start the application’s server and all of the technical acceptance criteria. This includes syncing with Mongo via Mongoose at server startup, seeding, models and schema as required, date formatting and more.

[Link to Website WalkThrough Video](https://youtu.be/HNc61D-j4nI)

![TBD, TBD, TBD](./client/src/images/00-demo.gif)

Screenshot #1: Demonstrates....

![TBD, TBD, TBD.](./client/src/images/01-manifest.png)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. Deployed Site URL - Heroku: [LINK](https://text-editor-calla.herokuapp.com/)
3. GitHub Repo: <https://github.com/stevecalla/social-network-api>
4. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.