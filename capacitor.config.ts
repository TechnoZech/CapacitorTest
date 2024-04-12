import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitor_test.app',
  appName: 'hello_capacitor',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: process.env.REACT_APP_BASE_URL,
    cleartext: true
  },
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": process.env.REACT_APP_GOOGLE_CLIENT_ID,
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;
