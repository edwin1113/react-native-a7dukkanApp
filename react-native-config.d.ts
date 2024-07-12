declare module 'react-native-config' {
  export interface NativeConfig {
    API_PRODUCT_URL: string;
    API_AUTH_LOGIN_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
