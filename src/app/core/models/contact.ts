export class Contact {    
    "Main":
    {
        name: string
        email: string
        subject: string
        linkedin: string
        phone: string
        description: string
        language: string
        recaptcha: string
    };
    "Greetings":
    {
      A: string
      B: string
      C: string
    };
    "Fields":
    {
        Name: string
        Email: string
        Subject: string
        Phone: string
        Message: string        
    }
}

class Main { 
    name!: string;
    email!: string;
    subject!: string;
    linkedin!: string;
    phone!: string;
    description!: string;
    language!: string;
    recaptcha!: string;
}

export class Greetings { 
    A!: string
    B!: string
    C!: string
}

export class Fields { 
    Name!: string;
    Email!: string;
    Subject!: string;
    LinkedIn!: string;
    Phone!: string;
    Message!: string;
    
}