import { user } from "./user.model";

export class Bid {
    _id: string;
    bidDate: Date = new Date();
    bidPrice: number = 0.00;
    bidProvider: user;
    jobId: string;
}