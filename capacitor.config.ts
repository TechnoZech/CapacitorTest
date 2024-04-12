import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitor_test.app',
  appName: 'hello_capacitor',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    // url: 'http://192.168.137.1:3000',
    url: 'https://capacitor-test-ten.vercel.app/',
    cleartext: true
  },
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "188386290850-9fp1l8ckjp146sh83djf2tdfk7fq478i.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;

// id: 188386290850-9fp1l8ckjp146sh83djf2tdfk7fq478i.apps.googleusercontent.com
// secret: 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
