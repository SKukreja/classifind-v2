export class review {
    reviewComments: string = "";
    reviewRating: number = 0.0;
    reviewType: string = "Requestor";
    reviewDate: Date = new Date();
    reviewedJobId: number = 0;
    submittingUserId: number = 0;
    receivingUserId: number = 0;
}