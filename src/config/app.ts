// Environment configuration
export const ENV = {
    NODE_ENV: process.env.NODE_ENV || "development",
    IS_DEVELOPMENT: process.env.NODE_ENV === "development",
    IS_PRODUCTION: process.env.NODE_ENV === "production",
} as const;

// App configuration
export const APP_CONFIG = {
    name: "XCopTech",
    version: "1.0.0",
    description: "Your innovative technology solutions partner",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

// Feature flags
export const FEATURES = {
    sidebar: true,
    animations: true,
    mobileOptimizations: true,
} as const; 