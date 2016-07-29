SystemJS.config({
  baseURL: "/",
  trace: true,
  defaultJSExtensions: true,
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-inferno/": ""
  },
  bundles: {
    "build.js": [
      "app.js",
      "npm:inferno-router@0.7.24/inferno-router.js",
      "npm:inferno-router@0.7.24.json",
      "npm:inferno@0.7.24/dist/inferno-router.js",
      "npm:inferno@0.7.24.json",
      "npm:inferno-dom@0.7.24/inferno-dom.js",
      "npm:inferno-dom@0.7.24.json",
      "npm:inferno@0.7.24/dist/inferno-dom.js",
      "routes/home.js",
      "npm:mobx-inferno@0.1.1/index.js",
      "npm:mobx-inferno@0.1.1.json",
      "npm:inferno-create-class@0.7.24/inferno-create-class.js",
      "npm:inferno-create-class@0.7.24.json",
      "npm:inferno@0.7.24/dist/inferno-create-class.js",
      "npm:inferno-component@0.7.24/inferno-component.js",
      "npm:inferno-component@0.7.24.json",
      "npm:inferno@0.7.24/dist/inferno-component.js",
      "npm:inferno@0.7.24/inferno.js",
      "npm:inferno@0.7.24/dist/inferno.js",
      "npm:mobx@2.4.0/lib/mobx.js",
      "npm:mobx@2.4.0.json",
      "stores/example-store.js",
      "github:capaj/systemjs-hot-reloader@0.6.0.json"
    ]
  }
});
