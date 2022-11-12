export declare const requests: {
    get: (url: string, params?: unknown) => Promise<Response>;
    post: (url: string, options?: RequestInit) => Promise<Response>;
    put: (url: string, options?: RequestInit) => Promise<Response>;
    patch: (url: string, options?: RequestInit) => Promise<Response>;
    delete: (url: string, options?: RequestInit) => Promise<Response>;
};
