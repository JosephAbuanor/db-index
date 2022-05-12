const clientId = "9a328dbf-57a2-44e9-a447-8ac27af61ca2"; // Client Id of the registered application
const callback = (errorDesc, token, error, tokenType) => {};
// An Optional options for initializing the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#configuration-options
const options = {
  redirectUri: "http://localhost/auth-response",
};
const graphScopes = ["user.read", "mail.send"]; // An array of graph scopes

// Initialize the MSAL @see https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics#initialization-of-msal
const userAgentApplication = new UserAgentApplication(
  clientId,
  undefined,
  callback,
  options
);
const authProvider = new MSALAuthenticationProvider(
  userAgentApplication,
  graphScopes
);

console.log(authProvider);
