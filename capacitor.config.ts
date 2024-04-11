import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hello_capacitor',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    // url: 'http://192.168.137.1:3000',
    url: 'https://capacitor-test-ten.vercel.app/',
    cleartext: true
  }
};

export default config;
