// Function to add two variables.

function test(){
    var a = 2;
    var b =3 ;
    console.log("The value of A : "+a);
    console.log("The value of B : "+b);

    var temp =a;
    a=b;
    b=temp;
    var name = "Rahul";
    
    console.log("The value of A : "+a);
    console.log("The value of B : "+b);

    for(var i=0;i<10;i++){
        console.log("Hello "+i);
    }
    console.log("Outside Loop"+i);
    var x =10;
    var y="10";
    if(x==y)
    {
        console.log("Condition True");
    }
    else{
        console.log("Condition False");
    }

    var car = {type:"Fiat", model:"500", color:"white",drive:"four Wheel"};

    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
      var arr = [1,2,3,4,5,"Rahul"];
      
    console.log(car.type);
    console.log(car.drive);

}
test();