import getConfig from "next/config";

export class PatientService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
        this.url = 'http://localhost:8000/'
        this.bearerToken = "Bearer erWM89OcEcsaE6u5wQ6eUpFhgGKoKb";
    }

    

    

    applyDateFormat(birthDate) {
        var formatedDate = '';
        formatedDate = birthDate.getFullYear() // Year (YYYY)
            + '-' 
            + ('00' + (birthDate.getMonth() + 1)).slice(-2) // Month (MM)
            + '-' 
            + ('00' + birthDate.getDate()).slice(-2); // Day (DD)
        return formatedDate;
    }
}