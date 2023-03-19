import { Job } from "./job.model";
import { User } from "./user.model";

export class Review {
    _id: string;
    reviewComments: string;
    reviewRating: number;
    id: string;
    completedJobId: string;
    reviewDate: Date;
    requestorUserId: string;
    providerUserId: string;
    jobRequestor?: User;
    jobProvider?: User;
    job: Job;
}