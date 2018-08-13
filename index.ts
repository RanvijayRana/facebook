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

    getPlaceLived= (): string[] =>{
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

// all the information is tidious to pass through constructor so we use set/update method

//set data for work and education section
let skill1: string = "HTML";
let skill2: string = "CSS";
ranvijay.updateProfessionalSkill(skill1);
ranvijay.updateProfessionalSkill(skill2);

let college: string = "National Institute of Technology";
let collegeYear: number = 2014;
let degree: string = "B.Tech";
let location1: string = "Durgapur";
ranvijay.updateCollege(college,collegeYear,degree,location1);

let school: string = "Prestine Children High School";
let schoolYear: number = 2007;
let schoolLocation1: string = "Muzaffarpur";
ranvijay.updateSchool(school,schoolYear,schoolLocation1);

//place lived has been update through constructor; in-time if we need to update call updateCurrentCity and hometown
// method

//contact information
let contactDetails: number = 8778243965;
ranvijay.setSecondaryContact(contactDetails);

let address: string = "Concorde Silicon Valley";
let cityTown: string = "Bangalore";
let zip: number = 560100;
let neighborhood: string ="Electronic City";
ranvijay.updateAddress(address, cityTown, zip, neighborhood);

let email: string = "ranvijay.144@gmail.com";
ranvijay.updateEmail(email);

let fbEmail: string = "ranvijay.rana@facebook.com";
ranvijay.updateFbEmail(fbEmail);

let birthDate: number = 20;
let birthMonth: string = "Dec";
let birthYear: number = 1992;
ranvijay.updateBirth(birthDate, birthMonth, birthYear);
let currentYear: number = 2018;
ranvijay.updateAge(currentYear);

let socialLinkAdd: string = "ranvijay.144@skype.com";
let socialLinkSite: string = "Skype";
ranvijay.updateSocialLink(socialLinkAdd, socialLinkSite);

let gender: string = "Male";
let interestedIn: string = "Female";
let language1: string = "Hindi";
let language2: string = "English";
let religiousView: string = "Hinduism";
let politicalView: string = "Democratic";
ranvijay.updateGender(gender);
ranvijay.updateInterestedIn(interestedIn);
ranvijay.updateLanguage(language1);
ranvijay.updateLanguage(language2);
ranvijay.updateReligiousView(religiousView);
ranvijay.updatePoliticalView(politicalView);

let relationshipStatus: string = "Single";
let familyMember1: string = "Sonu";
let familyMember2: string = "Radha";
let familyRelation1: string = "Brother";
let familyRelation2: string = "Sister";
ranvijay.updateRelationship(relationshipStatus);
ranvijay.updatefamily(familyMember1, familyMember1);
ranvijay.updatefamily(familyMember2, familyMember2);

let eventName1: string = "BirthYear";
let eventYear1: number = 1992;
let eventName2: string = "Sonu Birthday";
let eventYear2: number = 1995;
let eventName3: string = "Facebook joined";
let eventYear3: number = 2014;
ranvijay.updateEvent(eventName1, eventYear1);
ranvijay.updateEvent(eventName2, eventYear2);
ranvijay.updateEvent(eventName3, eventYear3);

let description: string = "helpful";
let nickName1: string = "rana";
let nickName2: string = "ranvi";
let quotes: string = "Never do at expense of other!!!";
ranvijay.updateDescription(description);
ranvijay.updatenickname(nickName1);
ranvijay.updatenickname(nickName2);
ranvijay.updateFavQuotes(quotes);

//retrieve data
console.log(ranvijay.getCurrentDesignation);
console.log(ranvijay.getCurrentWorkPlace);
console.log(ranvijay.getDesignation);
console.log(ranvijay.getWorkPlace);

console.log(ranvijay.getProfessionalSkill);
console.log(ranvijay.getCollege);
console.log(ranvijay.getCollegeYear);
console.log(ranvijay.getDegree);
console.log(ranvijay.getCollegeLocation);

console.log(ranvijay.getSchool);
console.log(ranvijay.getSchoolYear);
console.log(ranvijay.getSchoolLocation);

console.log(ranvijay.getCurrentCity);
console.log(ranvijay.getPlaceLived);
console.log(ranvijay.getHomeTown);

console.log(ranvijay.getAddress);
console.log(ranvijay.getCityTown);
console.log(ranvijay.getZip);
console.log(ranvijay.getNeighborhood);

console.log(ranvijay.getEmail);
console.log(ranvijay.getFbEmail);

console.log(ranvijay.getSocialLinkAdd);
console.log(ranvijay.getSocialLinkSite);

console.log(ranvijay.getBirthDate);
console.log(ranvijay.getBirthMonth);
console.log(ranvijay.getBirthYear);
console.log(ranvijay.getAge);

console.log(ranvijay.getGender);
console.log(ranvijay.getInterestedIn);
console.log(ranvijay.getLanguage);
console.log(ranvijay.getReligiousView);
console.log(ranvijay.getPoliticalView);

console.log(ranvijay.getRelationshipStatus);
console.log(ranvijay.getFamilyMember);
console.log(ranvijay.getFamilyRelation);

console.log(ranvijay.getDescription);
console.log(ranvijay.getnickName);
console.log(ranvijay.getFavQuotes);

console.log(ranvijay.getEventName);
console.log(ranvijay.getEventYear);