//facebook
class Person{
    //Work and Education
    private currentDesignation: string;
    private currentWorkPlace: string; 
    
    private dsignation: string[] = [];
    private workPlace: string[] = []; 
    
    private professionalSkill: string[] = [];
    private college: string[] = [];
    private collegeYear: number[] = [];
    private degree: string[] = [];
    private collegeLocation: string[] = [];
    
    private school: string[] = [];
    private schoolYear: number[] = [];
    private schoolLocation: string[] = [];//end of work and education

    //place you lived
    private currentCity: string;
    private homeTown: string;
    private placeLived: string[];  //end of place you lived

    //contact information
    private primaryContact: number;
    private secondaryContact: number[] = [];

    private address: string;
    private cityTown: string;
    private zip: number;
    private neighborhood: string;

    private email: string;
    private fbEmailId: string;

    private socialLinkAddress: string[];
    private socialLinkSite: string[];

    private birthDate: number;
    private birthMonth: string;
    private birthYear: number;

    private gender: string;
    private interestedIn: string;

    private language: string[];

    private religiousView: string;

    private politicalView: string;  //end of basic information    

    //Relationship
    private relationshipStatus: string;
    private familyMember: string[];
    private familyRelation: string[];//end of relationship information

    //About you
    private yourDescription: string;

    private nickname: string[];

    private favoriteQuotes: string;  //end of info about you

    //Life Event
    private eventYear: number[];
    private eventName: string[];  //end of life event

    //constructor defined
    constructor(currentDesignation: string, currentWorkPlace: string, designation: string[], workPlace: string[], 
                currentCity: string, homeTown: string, placeVisited: string[], primaryContact: number,
                ){
        this.currentDesignation = currentDesignation;
        this.currentWorkPlace = currentWorkPlace;
        this.dsignation = designation;
        this.workPlace = workPlace;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.placeLived = placeVistited;
        this.primaryContact = primaryContact
    }//end of constructor

    //methods
    //Work and Education
    updateCurrentDesignation = (newDesignation: string, newWorkPlace: string): void =>{
        this.dsignation.push(this.currentDesignation);
        this.currentDesignation = newDesignation;
        this.workPlace.push(this.currentWorkPlace);
        this.currentWorkPlace = newWorkPlace;
    }

    getCurrentDesignation= (): string =>{
        return this.currentDesignation;
    }

    getCurrentWorkPlace= (): string =>{
        return this.currentWorkPlace;
    }
    getDesignation= (): string[] =>{
        return this.dsignation;
    }

    getWorkPlace= (): string[] =>{
        return this.workPlace;
    }

    updateProfessionalSkill = (skill : string): void =>{
        this.professionalSkill.push(skill);
    }
    getProfessionalSkill = (skill : string): string[]=>{
        return this.professionalSkill;
    }

    updateCollege = (college: string, collegeYear: number, degree: string, location: string):void =>{
        this.college.push(college);
        this.collegeYear.push(collegeYear);
        this.degree.push(degree);
        this.collegeLocation.push(location)
    }

    getCollege = ():string[] =>{
        return this.college;
    }
    getCollegeYear = ():number[] =>{
        return this.collegeYear;
    }
    getDegree = ():string[] =>{
        return this.degree;
    }
    getCollegeLocation = ():string[] =>{
        return this.collegeLocation;
    }

    updateSchool = (school: string, schoolYear: number, location: string):void =>{
        this.school.push(school);
        this.schoolYear.push(schoolYear);
        this.schoolLocation.push(location)
    }

    getSchool = ():string[] =>{
        return this.school;
    }
    getSchoolYear = ():number[] =>{
        return this.schoolYear;
    }
    getSchoolLocation = ():string[] =>{
        return this.schoolLocation;
    }

    //place you lived
    updateCurrentCity= (newCity: string): void =>{
        this.placeLived.push(this.currentCity);
        this.currentCity = newCity;
    }

    getCurrentCity= (): string =>{
        return this.currentCity;
    }

    getCityLived= (): string[] =>{
        return this.placeLived;
    }

    updateHometown= (newHometown: string): void =>{
        this.placeLived.push(this.homeTown);
        this.homeTown = newHometown;
    }

    getHomeTown= (): string =>{
        return this.homeTown;
    }

    //contact information
    setSecondaryContact= (contactDetails: number): void =>{
        this.secondaryContact.push(contactDetails);
    }

    getSecondaryContact= (): number[]=>{
        return this.secondaryContact;
    }
}//end of class

let designation: string[] = ["Systems Engineer Trainee","Systems Engineer"];
let workPlace: string[] = ["Infosys","Infosys"];

let placeVistited: string[] = ["Vaishali","Muzaffarpur","Kota","Durgapur","Chennai"];

let ranvijay = new Person("Senior Systems Engineer","Infosys",designation,workPlace,"Bangalore","Vaishali",
                            placeVistited,9751862357);

let contactDetails: number = 8778243965;
ranvijay.setSecondaryContact(contactDetails);
console.log(ranvijay);

