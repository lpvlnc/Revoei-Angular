import { PartyHouse } from "./party-house";

export interface Party {
    id: number;
    partyHouseId: number;
    name: string;
    description: string;
    startAt: Date;
    endAt?: Date;
    price: number;
    openBar: boolean;
    genre: string;
    upVotes: number;
    downVotes: number;
    stars: number;
    photo: string;
    partyHouse: PartyHouse;
}

export interface DateDTO {
    id: number;
    name: string;
    startAt: Date;
}