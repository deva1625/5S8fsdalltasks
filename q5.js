let temperatureCalculator={
   
    tofahren(x){
        let temp=((x/5)*9)+32;
        return temp;
    },
    tocelsius(y){
            let temp=(y-32)*5/9;
            return temp;
    }


}
let x=prompt("Enter temperature in celsius");

let y=prompt("Enter temperature in Fahrenheit");

let temp1=temperatureCalculator.tofahren(x);
console.log("Temperature in celsius is :"+x+" same in Fahrenheit is :"+temp1);

let temp2=temperatureCalculator.tocelsius(y);
console.log("Temperature in Fahrenheit is :"+y+" same in Celcius is :"+temp2);