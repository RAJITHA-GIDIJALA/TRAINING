var url="http://localhost:3000/testimonial";
var url1="http://localhost:3000/services";
var content=document.querySelector(".content");
let services=document.querySelector(".container2");
var imagepics=document.querySelector(".image");
var url="http://localhost:3000/pics";



async function getitems()
{
 var listitems=await fetch(url);
 response=await listitems.json();
 for( i=0;i<response.length;i++)
{
  content.innerHTML+=`<div class="col-4 bg-light mx-md-1">
                       <img src=${response[i].rating}>
                       <span class=" col-11">${response[i].content}</span>
                       <ul class="col-12 d-flex">
                           <li class="col-6 nav-link d-flex">
                             <img src=${response[i].profileImage}>
                                    <span class=" ">
                                        <h6>${response[i].profileName}</h6><br>
                                        <h6>${response[i].Designation}</h6>
                                    </span>
                            </li>
                           <li class="col-6 nav-link">
                              <img src=${response[i].doubleQuotes} class="col-3 mx-md-1">
                            </li>
                        </ul>                                               
                           </div>` 
            }
  console.log(response);
  }getitems();    

async function getitems1()
{
 var listitems=await fetch("http://localhost:3000/services");
 response=await listitems.json();
 for( i=0;i<response.length;i++)
{
  services.innerHTML+=
           `<div class="container3">
            <img src=${response[i].image} class="image">
            <img src=${response[i].img} class="image1">
            <h5 class="service">${response[i].service_name}</h5>
            <h5 class="design">${response[i].designs}</h5>
            <h5 class="description">${response[i].description}</h5>
            </div>`;
          }console.log(response);
}getitems1();

var imagepics=document.querySelector(".image");
var url="http://localhost:3000/pics";

async function getitems2()
{
 var listitems=await fetch("http://localhost:3000/pics");
 response=await listitems.json();
 for( i=0;i<response.length;i++)
{
  imagepics.innerHTML+=
           `<div class="container3">
            <img src=${response[i].img_url1} class="image">
             <img src=${response[i].img_url2} class="image">
             <img src=${response[i].img_url3} class="image"> <br>          
            </div>`;
          }console.log(response);
}getitems2();


