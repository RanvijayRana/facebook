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

    private address: string ="";
    private cityTown: string ="";
    private zip: number = 0;
    private neighborhood: string ="";

    private email: string ="";
    private fbEmailId: string ="";

    private socialLinkAddress: string[] =[];
    private socialLinkSite: string[] =[];

    private birthDate: number =0;
    private birthMonth: string ="";
    private birthYear: number =0;
    private age: number = 0;

    private gender: string ="";
    private interestedIn: string ="";
    private language: string[] =[];
    private religiousView: string ="";
    private politicalView: string ="";  //end of basic information    

    //Relationship
    private relationshipStatus: string = "";
    private familyMember: string[] = [];
    private familyRelation: string[] = [];//end of relationship information

    //About you
    private yourDescription: string = "";

    private nickname: string[] = [];

    private favoriteQuotes: string = "";  //end of info about you

    //Life Event
    private eventYear: number[] = [];
    private eventName: string[] = [];  //end of life event

    //constructor defined
    constructor(currentDesignation: string, currentWorkPlace: string, designation: string[], workPlace: string[], 
                currentCity: string, homeTown: string, placeVisited: string[], primaryContact: number
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
    updatePrimaryContact= (contactDetails: number): void =>{
        this.primaryContact = contactDetails;
    }

    getPrimaryContact= (): number=>{
        return this.primaryContact;
    }

    setSecondaryContact= (contactDetails: number): void =>{
        this.secondaryContact.push(contactDetails);
    }

    getSecondaryContact= (): number[]=>{
        return this.secondaryContact;
    }

    updateAddress= (address: string, cityTown: string, zip: number, neighborhood: string):void=> {
        this.address = address;
        this.cityTown = cityTown;
        this.zip = zip;
        this.neighborhood = neighborhood;
    }

    getAddress= (): string => {
        return this.address;
    }

    getCityTown= (): string => {
        return this.cityTown;
    }

    getZip= (): number => {
        return this.zip
    }

    getNeighborhood= (): string => {
        return this.neighborhood;
    }

    updateEmail=(email: string): void =>{
        this.email = email;
    }

    getEmail=(): string =>{
        return this.email;
    }

    updateFbEmail=(fbEmail: string): void =>{
        this.fbEmailId = fbEmail;
    }

    getFbEmail=(): string =>{
        return this.fbEmailId;
    }

    updateSocialLink=(socialLinkAdd: string, socialLinkSite: string): void =>{
        this.socialLinkAddress.push(socialLinkAdd);
        this.socialLinkSite.push(socialLinkSite);
    }

    getSocialLinkAdd=(): string[] =>{
        return this.socialLinkAddress;
    }

    getSocialLinkSite=(): string[] =>{
        return this.socialLinkSite;
    }

    updateBirth=(date: number, month: string, year: number):void => {
        this.birthDate = date;
        this.birthMonth = month;
        this.birthYear = year;
    }

    getBirthDate = () : number =>{
        return this.birthDate
    }

    getBirthMonth = () : string =>{
        return this.birthMonth;
    }

    getBirthYear = () : number =>{
        return this.birthYear;
    }
    updateAge = (currentYear : number) : void =>{
        this.age = currentYear - this.birthYear;
    }

    getAge = () : number =>{
        return this.age;
    }

    updateGender=(gender: string):void => {
        this.gender = gender;
    }

    getGender = () : string =>{
        return this.gender;
    }

    updateInterestedIn=(gender: string):void => {
        this.interestedIn = gender;
    }
    getInterestedIn = () : string =>{
        return this.interestedIn;
    }

    updateLanguage=(language: string):void => {
        this.language.push(language);
    }

    getLanguage = () : string[] =>{
        return this.language;
    }

    updateReligiousView=(religion: string):void => {
        this.religiousView = religion;
    }

    getReligiousView = () : string =>{
        return this.religiousView;
    }

    updatePoliticalView=(politics: string):void => {
        this.politicalView = politics;
    }

    getPoliticalView = () : string =>{
        return this.politicalView;
    }

    //Relationship
    updateRelationship=(relation: string):void => {
        this.relationshipStatus = relation;
    }
    
    getRelationshipStatus = () : string =>{
        return this.relationshipStatus;
    }

    updatefamily=(memberName: string, relation: string):void => {
        this.familyMember.push(memberName);
        this.familyRelation.push(relation)
    }
    getFamilyMember = () : string[] =>{
        return this.familyMember;
    }
    getFamilyRelation = () : string[] =>{
        return this.familyRelation;
    }

    //About you
    updateDescription=(description: string):void => {
        this.yourDescription = description;
    }
    getDescription = () : string =>{
        return this.yourDescription;
    }
    updatenickname=(nickName: string):void => {
        this.nickname.push(nickName);
    }
    getnickName = () : string[] =>{
        return this.nickname;
    }
    updateFavQuotes=(quotes: string):void => {
        this.favoriteQuotes = quotes;
    }
    getFavQuotes = () : string =>{
        return this.favoriteQuotes;
    }

    //Events
    updateEvent=(eventName: string, eventYear: number):void => {
        this.eventName.push(eventName);
        this.eventYear.push(eventYear)
    }
    getEventName = () : string[] =>{
        return this.eventName;
    }
    getEventYear = () : number[] =>{
        return this.eventYear;
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

