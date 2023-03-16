export class review {
    _id: string = "";
    reviewComments: string = "";
    reviewRating: number = 0.0;
    reviewType: string = "Requestor";
    reviewDate: Date = new Date();
    reviewedJobId: number = 0;
    submittingUserId: string = "";
    receivingUserId: string = "";
}