const privateKey = "89a0a78f542e11d1723f99ea9148f6df31cabdcf";
const publicKey = "6d5c25695d599d0088ddcf3f7648b6fe";
const hash="f1ef59d5e7b28239a43a2e1bf0298317";
const maxCharacters = 1500;




/*function createHash(timeStamp) {

    const toBeHashed = timeStamp + privateKey + publicKey;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;

}*/
timeStamp="1622481449292";
function getCharacterList() {

    //tempo agora
    const timeStamp = Date.now().toString();
    //numero randomico de herois
    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    //hash para validar a requisição

    
    const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=9&offset="+offset+"&ts=1622482862710&apikey=6d5c25695d599d0088ddcf3f7648b6fe&hash=f1ef59d5e7b28239a43a2e1bf0298317";

    // sla mas funcionou
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getImages(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();
}


function showHistorys(elemento) {

    const codigo = elemento.parentNode.getElementsByTagName("h5")[1].textContent.substring(4, 11);//codigo do personagem
    console.log(codigo);
    const timeStamp = Date.now().toString();//tempo agora
    const hash = createHash(timeStamp);//hash para validar a requisição

    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    console.log(urlAPI);
    
    // sla mas funcionou
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistorys(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}