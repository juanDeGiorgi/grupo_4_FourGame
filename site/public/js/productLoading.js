

document.getElementById("image").onchange = e =>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        let preview = document.getElementById("preview");
        image = document.createElement("img");
        image.src = reader.result;
        preview.innerHTML = " ";
        preview.append(image);
    }
};

document.getElementById("image1").onchange = e =>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        let preview1 = document.getElementById("preview1");
        image = document.createElement("img");
        image.src = reader.result;
        preview1.innerHTML = " ";
        preview1.append(image);
    }
};

document.getElementById("image2").onchange = e =>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        let preview2 = document.getElementById("preview2");
        image = document.createElement("img");
        image.src = reader.result;
        preview2.innerHTML = " ";
        preview2.append(image);
    }
};