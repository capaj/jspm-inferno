SystemJS.config({
  baseURL: "/",
  trace: true,
  defaultJSExtensions: true,
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-inferno/": ""
  }
});
