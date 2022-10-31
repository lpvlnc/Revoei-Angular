export interface Login {
    username: string;
    password: string;
}

export interface TokenBase {
    token: string;
}

export interface Token extends TokenBase {
    minutesTillExpires: number;
}

export interface ResetPasswordModel {
    password: string;
    passwordConfirmation: string;
    token: string;
}