//facebook
class Person{
    //Work and Education
    private currentDesignation: string;
    private currentWorkPlace: string; 
    
    private dsignation: string[];
    private workPlace: string[]; 
    
    private professionalSkill: string[];
    private college: string[];
    private collegeYear: number[];
    private degree: string[];
    private collegeLocation: string[];
    
    private school: string[];
    private schoolYear: number[];
    private schoolLocation: string[];//end of work and education

    //place you lived
    private currentCity: string;
    private homeTown: string;
    private placeLived: string[];  //end of place you lived

    //contact information
    private primaryContact: number;
    private seccondaryContact: number[];

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
}