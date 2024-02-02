const option = document.getElementById('search-select');
option.addEventListener('change',function() {
    var selectedFile=this.value;
    if(selectedFile){
        window.location.href=selectedFile;
    }
});

const option = document.getElementById('search-select');
const slider = document.getElementById('slider');
const output = document.getElementById('value_output');
const images = document.getElementById('image-container');

const image=["image1.png","image2.png"];
const initialImage=images[slider.value/(100/images.length)];
images.innerHtml=`<img src="${initialImage}" alt="Slider Image">`;



slider.addEventListner("input", () =>
{
    const currImageIndex=slider.value/(100/images.length);
    const currImage=images[currImageIndex];
    images.innerHtml=`<img src="${initialImage}" alt="Slider Image">`;


    const value=slider.value;
    output.textContent=value;
});


option.addEventListener('change',function() {
    var selectedFile=this.value;
    if(selectedFile){
        window.location.href=selectedFile;
    }
});



function toogleToolbar(){
    var toolbar=document.getElementById("sideToolbar");
    if(toolbar.style.left=="0px"){
        toolbar.style.left="-250px";
    }else{
        toolbar.style.left="0px";
    }
}




