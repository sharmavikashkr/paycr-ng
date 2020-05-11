// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  APP_URL: "http://localhost:9090",
  OAUTH_URL: "http://localhost:8080",
  REDIRECT_URL: "http://localhost:4200/login",
  CLIENT_ID: "web-client",
  CLIENT_SECRET: "3b5e8eb3fcfafa2e7b302f75c0e185d33d8690c2",
};
