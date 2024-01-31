const option = document.getElementById('search-select');
option.addEventListener('change',function() {
    var selectedFile=this.value;
    if(selectedFile){
        window.location.href=selectedFile;
    }
});

