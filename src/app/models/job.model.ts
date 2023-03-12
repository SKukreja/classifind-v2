export interface Job {
    _id: string;
    requestorId: number;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string;
    jobAddressStreet: string;
    jobAddressPostal: string;
    jobAddressCity: string;
    jobAddressCountry: string;
    jobPostingDate: string;
    jobStatus: string;
}