function mergeUserData(userDetails,userAddress,userPreferences){

        return {
            ...userDetails,
            ...userAddress,
            ...userPreferences
        }
}
const userAddress={
    address:"mangalpally",
    city:"Hyderabd"
}
const userPreferences = {
        theme:"Enginering",
        language:"english"
     } 
const userDetails={
        name:"deva",
        age:20,
        
    }
const userdata=mergeUserData(userDetails,userAddress,userPreferences)
console.log(userdata)