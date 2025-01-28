async function getData(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
     const data=await response.json()

    console.log(data)
    const allusers=document.getElementById("output")

  for(let i=0;i<3;i++){
  

        const listitem=document.createElement('li')

        var user=`Name :${data[i].name} , Email :${data[i].email} , Phone :${data[i].phone}`
        listitem.textContent=user
        allusers.appendChild(listitem)
 }

}

//getData()