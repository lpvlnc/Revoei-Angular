export interface Login {
    username: string;
    password: string;
}

export interface Token {
    token: string;
    minutesTillExpires: number;
}

export interface EmailConfirmationToken {
    token: string;
}