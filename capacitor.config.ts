import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d11c3d35d3e4465dbd873e42c0ecaca0',
  appName: 'swift-scoot-delivery',
  webDir: 'dist',
  server: {
    url: 'https://d11c3d35-d3e4-465d-bd87-3e42c0ecaca0.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f172a',
      showSpinner: false
    }
  }
};

export default config;