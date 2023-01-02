let services=document.querySelector(".services");

async function getitems()
{
 var listitems=await fetch("http://localhost:3000/services");
 response=await listitems.json();
 for(let i=0;i<response.length;i++)
{
  services.innerHTML+=
           `<tr>
           <td>${i+1}</td>
           <td> <img src=${response[i].image} class="image">  </td>        
           <td> <h5 class="service">${response[i].service_name}</h5></td>
           <td><h5 class="design">${response[i].designs}</h5></td>
           <td> <h5 class="description">${response[i].description}</h5></td>
           <td><h5 class="status">${response[i].status}</h5></td>
           <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
>
            </tr>`;
          }console.log(response);
}getitems();
