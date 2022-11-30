export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    emailConfirmed: boolean;
    profilePicture: string;
    createdAt: Date;
    points: number;
}