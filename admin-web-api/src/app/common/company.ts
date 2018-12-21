
export class Company{
    public id : number; 
    public name :string;
    public password :string;
    public email :string;

    constructor(public jsonid? : number,public jsonname? : string,
        public jsonpassword? : string,public jsonemail? : string) 
        {
            this.id =jsonid;
            this.name=jsonname;
            this.password=jsonpassword;
            this.email=jsonemail;
        }
}