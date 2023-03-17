import { Job } from "./job.model";
import { User } from "./user.model";

export class Review {
    _id: string = "";
    reviewComments: string = "";
    reviewRating: number = 0.0;
    reviewDate: Date = new Date();
    reviewedJobId: string = "";
    requestorUserId: string = "";
    providerUserId: string = "";
    jobRequestor: User;
    jobProvider: User;
    job: Job;
}