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
        this.setSecondaryContact = function (contactDetails) {
            _this.secondaryContact.push(contactDetails);
        };
        this.getSecondaryContact = function () {
            return _this.secondaryContact;
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
