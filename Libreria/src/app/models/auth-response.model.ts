export interface AuthResponse {
    accessToken: string;
    // Add other fields your Spring Boot API returns, for example:
    email?: string;
    expiresIn?: number;
}