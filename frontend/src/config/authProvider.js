import { authProvider as semappsAuthProvider } from '@semapps/auth-provider';
import * as resources from '../resources';
import dataProvider from "./dataProvider";

const authProvider = semappsAuthProvider({
  // middlewareUri: process.env.REACT_APP_MIDDLEWARE_URL,
  dataProvider,
  checkPermissions: true,
  // resources: Object.fromEntries(Object.entries(resources).map(([k, v]) => [k, v.dataModel]))
});

export default authProvider;