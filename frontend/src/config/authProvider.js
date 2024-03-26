import { authProvider as semappsAuthProvider } from '@semapps/auth-provider';
import * as resources from '../resources';
import urlJoin from 'url-join';
import dataProvider from "./dataProvider";

const authProvider = semappsAuthProvider({
  // middlewareUri: process.env.REACT_APP_MIDDLEWARE_URL,
  dataProvider,
  checkPermissions: true,
  // resources: Object.fromEntries(Object.entries(resources).map(([k, v]) => [k, v.dataModel]))
});

const getAuthServerUrl = async dataProvider => {
  const dataServers = await dataProvider.getDataServers();
  const authServer = Object.values(dataServers).find(server => server.authServer === true);
  if (!authServer) throw new Error('Could not find a server with authServer: true. Check your dataServers config.');
  // If the server is a POD, return the root URL instead of https://domain.com/user/data
  return authServer.pod ? new URL(authServer.baseUrl).origin : authServer.baseUrl;
};


authProvider.logout = async () => {

  const parts = localStorage.getItem('token').split('.'); // Sépare le token en ses parties
  console.log(parts);
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  console.log(payload);
  const authServerUrl = await getAuthServerUrl(dataProvider);
  const baseUrl = new URL(window.location.href).origin;
  // window.location.href = urlJoin(
  //   authServerUrl,
  //   `auth/logout?idToken=xxx&redirectUrl=${encodeURIComponent(`${urlJoin(baseUrl, 'login')}&logout=true`)}`
  // );
  window.location.href = urlJoin(
    authServerUrl,
    "auth/logout?idToken="+payload.idToken+"&redirectUrl=" + encodeURIComponent(urlJoin(baseUrl, "login") + "?logout=true")
  );
}

export default authProvider;