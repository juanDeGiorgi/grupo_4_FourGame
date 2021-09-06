

showImage = (input,idImage) =>{
    document.getElementById(input).onchange = e =>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            localStorage.setItem("pathImage",reader.result)
            document.getElementById(idImage).src = reader.result;
        }
    };

}


showImage("image","preview-image");

limpiar = (inputId,imageId,deleteId) =>{

    document.getElementById(inputId).value = "";
    document.getElementById(imageId).src = "/images/icon/default-image1.png";
    document.getElementById(deleteId).value = deleteId;
}

