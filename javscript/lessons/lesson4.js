class Qureshi {
    constructor(name,city,gender){
        this.name = name;
        this.city = city;
        this.gender = gender;
    }

    getQureshi(){
        return " Hello "+this.name+ " how is "+this.city  + " the Gender is "+this.gender;
    }

}
class qureshiDetails extends Qureshi{
    constructor(name,city,gender,spouse){
        super(name,city,gender);
        this.spouse = spouse;
    
    }
    getDetails(){
        return super.getQureshi()+ " and the Spose is "+ this.spouse;
    }

}

// var Mustafa = new Qureshi("Mustafa","Vancouver ","Male" );
// var mustafa = Mustafa.getQureshi();

// console.log(mustafa);
var Mustafa = new qureshiDetails("Mustafa","Vancouver ","Male","Sabah" );
var mustafa = Mustafa.getDetails();

console.log(mustafa);
