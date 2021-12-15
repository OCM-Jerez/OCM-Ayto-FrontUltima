
export interface IErrorResponse {
    statusCode: number;
    timestamp: string;
    path: string;
    errorResponse: ErrorResponse;
}

export interface ErrorResponse {
    statusCode: number;
    message: string[];
    error: string;
}
