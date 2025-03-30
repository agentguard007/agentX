/// <reference types="vite/client" />

interface ImportMeta {
    readonly env: {
      readonly DEV: boolean;
      readonly PROD: boolean;
      readonly MODE: string;
      readonly BASE_URL: string;
      // Add other environment variables you use
      [key: string]: any;
    };
  }