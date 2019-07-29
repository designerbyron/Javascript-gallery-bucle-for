
let imagenGrande = document.getElementById("imagenGrande");

let contenedorMiniaturas = document.getElementById("contenedorMiniaturas");

for(let i =1; i<=4; i++ ){
    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src", "img/viajes-atlanta01/pic"+i+".jpg");

    contenedorMiniaturas.appendChild(nuevaImagen);

    nuevaImagen.addEventListener("click", function(e){
        let mySrc = e.target.getAttribute("src");
        cambiarImagen(mySrc);
    })    

}

function cambiarImagen(mySrc){
    imagenGrande.setAttribute("src", mySrc);
}

//Segunda Electronicos camaras

let imagenGrandeElectronicos = document.getElementById("imagenGrandeElectronicos");

let contenedorMiniaturasElectronicos = document.getElementById("contenedorMiniaturasElectronicos");

for(let i =1; i<=4; i++ ){
    let nuevaImagenElectronicos = document.createElement("img");
    nuevaImagenElectronicos.setAttribute("src", "img/electronicos-camaras01/pic"+i+".jpg");

    contenedorMiniaturasElectronicos.appendChild(nuevaImagenElectronicos);

    nuevaImagenElectronicos.addEventListener("click", function(e){
        let mySrcElectronicos = e.target.getAttribute("src");
        cambiarImagenElectronicos(mySrcElectronicos);
    })    

}

function cambiarImagenElectronicos(mySrcElectronicos){
    imagenGrandeElectronicos.setAttribute("src", mySrcElectronicos);
}