export interface Job {
    _id: string;
    requestorId: string;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    jobAddressStreet: string;
    jobAddressPostal: string;
    jobAddressCity: string;
    jobAddressCountry: string;
    acceptedBidId: string | undefined;
    jobPostingDate: string;
    jobStatus: string;
    jobImage: string;
}