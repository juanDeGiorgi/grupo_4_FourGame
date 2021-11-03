// const $ = id => document.getElementById(id);

let extensions = [".jpg",".jpeg",".gif",".png",".webp"]


window.addEventListener("load",() =>{

    // formulario
    const form = $("formProduct");

    // inputs
    const images = [$("image"),$("image1"),$("image2"),$("image3"),$("image4")];
    const name = $("name");
    const price = $("price");
    const discount = $("discount");
    const description = $("description");

    // validaciones
    
    images.forEach(image =>{
        image.addEventListener("change",() =>{
            if(image.value){
                if(!allowedExtensions.exec(image.value)){
                        $("errorImages").innerHTML = `las extensiones permitidas son ${extensions.join(", ")}`
                }else{
                        $("errorImages").innerHTML = null
                }
            }
        })
    })



    // desabilitar el formulario
    form.addEventListener("submit",e => e.preventDefault());
})