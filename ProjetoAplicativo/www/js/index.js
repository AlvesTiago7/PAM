document.addEventListener('deviceready', onDeviceReady, false);

function Login() {
    let usuarioinformado = document.getElementById("inputEmail").value;
    let senhainformado = document.getElementById("inputPassword").value;
    if (usuarioinformado == "" && senhainformado == "") {
        console.log("Tente Novamente!")
    } else {
        console.log("Seja Bem-vindo!")
    }
}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}