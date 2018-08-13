//facebook
var Person = /** @class */ (function () {
    //constructor defined
    function Person(currentDesignation, currentWorkPlace, designation, workPlace, currentCity, homeTown, placeVisited, primaryContact) {
        var _this = this;
        this.dsignation = [];
        this.workPlace = [];
        this.professionalSkill = [];
        this.college = [];
        this.collegeYear = [];
        this.degree = [];
        this.collegeLocation = [];
        this.school = [];
        this.schoolYear = [];
        this.schoolLocation = []; //end of work and education
        this.secondaryContact = [];
        this.address = "";
        this.cityTown = "";
        this.zip = 0;
        this.neighborhood = "";
        this.email = "";
        this.fbEmailId = "";
        this.socialLinkAddress = [];
        this.socialLinkSite = [];
        this.birthDate = 0;
        this.birthMonth = "";
        this.birthYear = 0;
        this.gender = "";
        this.interestedIn = "";
        this.language = [];
        this.religiousView = "";
        this.politicalView = ""; //end of basic information    
        //Relationship
        this.relationshipStatus = "";
        this.familyMember = [];
        this.familyRelation = []; //end of relationship information
        //About you
        this.yourDescription = "";
        this.nickname = [];
        this.favoriteQuotes = ""; //end of info about you
        //Life Event
        this.eventYear = [];
        this.eventName = []; //end of life event
        //methods
        //Work and Education
        this.updateCurrentDesignation = function (newDesignation, newWorkPlace) {
            _this.dsignation.push(_this.currentDesignation);
            _this.currentDesignation = newDesignation;
            _this.workPlace.push(_this.currentWorkPlace);
            _this.currentWorkPlace = newWorkPlace;
        };
        this.getCurrentDesignation = function () {
            return _this.currentDesignation;
        };
        this.getCurrentWorkPlace = function () {
            return _this.currentWorkPlace;
        };
        this.getDesignation = function () {
            return _this.dsignation;
        };
        this.getWorkPlace = function () {
            return _this.workPlace;
        };
        this.updateProfessionalSkill = function (skill) {
            _this.professionalSkill.push(skill);
        };
        this.getProfessionalSkill = function (skill) {
            return _this.professionalSkill;
        };
        this.updateCollege = function (college, collegeYear, degree, location) {
            _this.college.push(college);
            _this.collegeYear.push(collegeYear);
            _this.degree.push(degree);
            _this.collegeLocation.push(location);
        };
        this.getCollege = function () {
            return _this.college;
        };
        this.getCollegeYear = function () {
            return _this.collegeYear;
        };
        this.getDegree = function () {
            return _this.degree;
        };
        this.getCollegeLocation = function () {
            return _this.collegeLocation;
        };
        this.updateSchool = function (school, schoolYear, location) {
            _this.school.push(school);
            _this.schoolYear.push(schoolYear);
            _this.schoolLocation.push(location);
        };
        this.getSchool = function () {
            return _this.school;
        };
        this.getSchoolYear = function () {
            return _this.schoolYear;
        };
        this.getSchoolLocation = function () {
            return _this.schoolLocation;
        };
        //place you lived
        this.updateCurrentCity = function (newCity) {
            _this.placeLived.push(_this.currentCity);
            _this.currentCity = newCity;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getCityLived = function () {
            return _this.placeLived;
        };
        this.updateHometown = function (newHometown) {
            _this.placeLived.push(_this.homeTown);
            _this.homeTown = newHometown;
        };
        this.getHomeTown = function () {
            return _this.homeTown;
        };
        //contact information
        this.updatePrimaryContact = function (contactDetails) {
            _this.primaryContact = contactDetails;
        };
        this.getPrimaryContact = function () {
            return _this.primaryContact;
        };
        this.setSecondaryContact = function (contactDetails) {
            _this.secondaryContact.push(contactDetails);
        };
        this.getSecondaryContact = function () {
            return _this.secondaryContact;
        };
        this.updateAddress = function (address, cityTown, zip, neighborhood) {
            _this.address = address;
            _this.cityTown = cityTown;
            _this.zip = zip;
            _this.neighborhood = neighborhood;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getCityTown = function () {
            return _this.cityTown;
        };
        this.getZip = function () {
            return _this.zip;
        };
        this.getNeighborhood = function () {
            return _this.neighborhood;
        };
        this.updateEmail = function (email) {
            _this.email = email;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.updateFbEmail = function (fbEmail) {
            _this.fbEmailId = fbEmail;
        };
        this.getFbEmail = function () {
            return _this.fbEmailId;
        };
        this.updateSocialLink = function (socialLinkAdd, socialLinkSite) {
            _this.socialLinkAddress.push(socialLinkAdd);
            _this.socialLinkSite.push(socialLinkSite);
        };
        this.getSocialLinkAdd = function () {
            return _this.socialLinkAddress;
        };
        this.getSocialLinkSite = function () {
            return _this.socialLinkSite;
        };
        this.updateBirth = function (date, month, year) {
            _this.birthDate = date;
            _this.birthMonth = month;
            _this.birthYear = year;
        };
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        this.getBirthMonth = function () {
            return _this.birthMonth;
        };
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        this.updateGender = function (gender) {
            _this.gender = gender;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.updateInterestedIn = function (gender) {
            _this.interestedIn = gender;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.updateLanguage = function (language) {
            _this.language.push(language);
        };
        this.getLanguage = function () {
            return _this.language;
        };
        this.updateReligiousView = function (religion) {
            _this.religiousView = religion;
        };
        this.getReligiousView = function () {
            return _this.religiousView;
        };
        this.updatePoliticalView = function (politics) {
            _this.politicalView = politics;
        };
        this.getPoliticalView = function () {
            return _this.politicalView;
        };
        //Relationship
        this.updateRelationship = function (relation) {
            _this.relationshipStatus = relation;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.updatefamily = function (memberName, relation) {
            _this.familyMember.push(memberName);
            _this.familyRelation.push(relation);
        };
        this.getFamilyMember = function () {
            return _this.familyMember;
        };
        this.getFamilyRelation = function () {
            return _this.familyRelation;
        };
        //About you
        this.updateDescription = function (description) {
            _this.yourDescription = description;
        };
        this.getDescription = function () {
            return _this.yourDescription;
        };
        this.updatenickname = function (nickName) {
            _this.nickname.push(nickName);
        };
        this.getnickName = function () {
            return _this.nickname;
        };
        this.updateFavQuotes = function (quotes) {
            _this.favoriteQuotes = quotes;
        };
        this.getFavQuotes = function () {
            return _this.favoriteQuotes;
        };
        //Events
        this.updateEvent = function (eventName, eventYear) {
            _this.eventName.push(eventName);
            _this.eventYear.push(eventYear);
        };
        this.getEventName = function () {
            return _this.eventName;
        };
        this.getEventYear = function () {
            return _this.eventYear;
        };
        this.currentDesignation = currentDesignation;
        this.currentWorkPlace = currentWorkPlace;
        this.dsignation = designation;
        this.workPlace = workPlace;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.placeLived = placeVistited;
        this.primaryContact = primaryContact;
    } //end of constructor
    return Person;
}()); //end of class
var designation = ["Systems Engineer Trainee", "Systems Engineer"];
var workPlace = ["Infosys", "Infosys"];
var placeVistited = ["Vaishali", "Muzaffarpur", "Kota", "Durgapur", "Chennai"];
var ranvijay = new Person("Senior Systems Engineer", "Infosys", designation, workPlace, "Bangalore", "Vaishali", placeVistited, 9751862357);
var contactDetails = 8778243965;
ranvijay.setSecondaryContact(contactDetails);
console.log(ranvijay);
