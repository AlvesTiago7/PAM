document.addEventListener('deviceready', onDeviceReady, false);

function onSucesso(imageURI){

    let tagImg = document.getElementById("Foto")
    
    tagImg.src = "data:image/jpeg;base664,"+imageURI;
}


function onFalha(err){
    console.dir(err);

}



function AbrirCamera(){

    navigator.camera.getPicture(onSucesso,onFalha,opcoes);


}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    let BtnAbrirCamera = document.getElementById('TirarFoto');


    var opcoes = {

        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: false,
        cameraDirection: 1,
        sourceType: Camera.PictureSourceType.CAMERA
    
    }

    BtnAbrirCamera.addEventListener('click', function () {
       alert ("Vamos Tirar uma Foto");
        navigator.camera.getPicture(onSucesso,onFalha,opcoes);
        
    })


}       