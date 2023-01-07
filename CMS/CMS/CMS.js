let services=document.querySelector(".container2");


async function getitems()
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
}getitems();
