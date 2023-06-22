function function1()
{
   var x=document.getElementById("show");
    if (x.style.display=="flex") {
        x.style.display="none";
    
      } else { 
        x.style.display="flex";
      }
}
// function change (icon){
//     if(document.getElementById(iconID).className=="fa-regular fa-circle fa-lg"){
//       document.getElementById(iconID).className = "fa-solid fa-circle active fa-lg";
//     }
//   }