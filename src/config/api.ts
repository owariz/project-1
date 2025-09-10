// API Configuration
export const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    timeout: 10000,
    retries: 3,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
    },
    user: {
        profile: "/user/profile",
        settings: "/user/settings",
    },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
} as const; 