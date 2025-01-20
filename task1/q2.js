let calculator=function(a,b){
    
        var a=Number(a);
        var b=Number(b);
        console.log("Adition is :",a+b);

        console.log("product is :",a*b);

        console.log("Difference is :",a-b);

        if(b==0){
            
                console.log("can't divide by zero");
        }
      else{
        console.log("Division is :",a/b);

      }
}
var c=prompt("Enter c:");
var d=prompt("Enter :");

calculator(c,d)
