export class Coupon{

    public  id:number;
	public  title:string ;
	public  start_date:Date;
	public  end_date:Date;
	public  amount:number;
	public  type:string;
	public  massage:string;
	public  price:number;
	public  image:string;
constructor( public  jsonid?:number,public  jsontitle?:string,public  jsonstart_date?:Date,public  jsonend_date?:Date
    ,public  jsonamount?:number,public  jsontype?:string, public  jsonmassage?:string,public  jsonprice?:number, public  jsonimage?:string ){
        this.id=jsonid
        this.title=jsontitle
        this.start_date=jsonstart_date
        this.end_date=jsonend_date
        this.amount=jsonamount
        this.type=jsontype
        this.massage=jsonmassage
        this.price=jsonprice
        this.image=jsonimage
    }
}