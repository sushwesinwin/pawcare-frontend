export interface RegisterData {
    name: string,
    email: string,
    password: string,
}

export interface LoginData {
    email: string,
    password: string,
}

export interface AuthResponse {
    token: string,


}

// Typed error response from backend (e.g., { error: string })
export interface ApiError {
    error: string,

}