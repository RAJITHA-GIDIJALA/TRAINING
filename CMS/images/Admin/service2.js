var title=document.querySelector(".title");
var description=document.querySelector(".description");
var design=document.querySelector(".design");
var status =document.querySelector(".status");
var service=document.querySelector(".service");

var submitbtn=document.querySelector(".submitbtn");

submitbtn.addEventListener("click",displayDetails);
async function displayDetails(){  
      
    let result=await fetch("http://localhost:3000/services",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        "service_name":service.value,       
        "designs":design.value,
        "description":description.value        
    })

});
       reply=await result.json();
        console.log(reply);
         
}