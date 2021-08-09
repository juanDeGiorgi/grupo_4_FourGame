

showImage = (input,idImage) =>{
    document.getElementById(input).onchange = e =>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            document.getElementById(idImage).src = reader.result;
        }
    };

}

showImage("image","preview-image");
showImage("image1","preview-image1");
showImage("image2","preview-image2");


limpiar = (inputId,imageId) =>{
    document.getElementById(inputId).value = "";
    document.getElementById(imageId).src = "/images/default-image1.png";
}


// OLD SHOW IMAGE PREVIEW FUNCTION

// showImage = (input,div,idImage) =>{
//     document.getElementById(input).onchange = e =>{
//         let reader = new FileReader();
//         reader.readAsDataURL(e.target.files[0]);
//         reader.onload = () =>{
//             let preview1 = document.getElementById(div);
//             image = document.createElement("img");
//             image.id = idImage;
//             image.src = reader.result;
//             preview1.innerHTML = " ";
//             preview1.append(image);
//         }
//     };

// }

