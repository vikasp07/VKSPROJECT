const option = document.getElementById('search-select');
// const slider = document.getElementById('slider');
// const output = document.getElementById('value-output');
// const imageContainer= document.getElementById('image-container');

option.addEventListener('change',function() {
  var selectedFile=this.value;
  if(selectedFile){
    window.location.href=selectedFile;
  }
});


// const images=["box1.jpg","box2.jpg","box3.jpg","box4.jpg","box5.jpg"];
// const initialImage=images[slider.value/(100/images.length)];
// imageContainer.innerHtml=`<img src="${initialImage}" alt="Slider Image">`;


// slider.addEventListener("input", () => {
//     const currImageIndex=slider.value/(100/images.length);
//     const currImage=images[currImageIndex];
//     imageContainer.innerHtml=`<img src="${currImage}" alt="Slider Image">`;



//     const value=slider.value;
//     output.textContent=value;
// });

// function changeImage(value) {
//     var imageSrc="box"+value+".jpg";
//     document.getElementById('displayedImage').src=imageSrc;
// }

// document.addEventListener('DOMContentLoaded',function() {
//     const button=document.getElementById('toggleButton');
//     button.addEventListener('click',function() {
//         toggleToolbar();

//     });



//     function toggleToolbar(){
//         var toolbar=document.getElementById("sidebar");
//         if(toolbar.style.left==="0px"){
//             toolbar.style.left="-250px";
//         }else{
//             toolbar.style.left="0px";
//         }
//     }
    
// });

// const sidebarToggle=document.getElementById("toggleButton");
// const sidebar=document.getElementById("sidebar");
// sidebarToggle.addEventListener("click",()=>{
//     sidebar.classList.toggle("hidden");
// });

// const navopen = document.querySelector('button.openbtn');
// const navclose = document.querySelector('a.closebtn');
// navopen.addEventListener('click', openNav);
// navclose.addEventListener('click', closeNav);

// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }

const navopen = document.querySelector('button.openbtn');
const navclose = document.querySelector('a.closebtn');
navopen.addEventListener('click',() =>{
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});
navclose.addEventListener('click', () =>{
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
});

