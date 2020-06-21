function Car (make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;


//Traditional approach
//this.printCarDetails = function(){
    //console.log("Make: " +this.make);
    //console.log("Model: " +this.model);
    //console.log("Make: " +this.year);
  //  console.log("-----");
//}
}
//Prototype approach
Car.prototype.printCarDetails=function(){
        console.log("Make: " +this.make);
        console.log("Model: " +this.model);
        console.log("Make: " +this.year);
        console.log("Is the vehicle new? " + this.isNew);
        console.log("-----");
    }

Car.prototype.isNew=true;

console.log("-----");
var toyotaCamry = new Car("Toyota", "Camry", 2015);
toyotaCamry.isNew=false;
toyotaCamry.printCarDetails();

var hondaAccord = new Car("Honda", "Accord", 2020);
hondaAccord.printCarDetails();