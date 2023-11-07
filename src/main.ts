import {Statue} from './Statue';

var lista : Artwork[];

function init(){
  lista = [];
  const osszesito = document.getElementById("osszesito");
  const nev = document.getElementById("szobor_nev") as HTMLInputElement;
  const ev = document.getElementById("szobor_ev") as HTMLInputElement;
  const ar = document.getElementById("szobor_ar") as HTMLInputElement;
  const magassag = document.getElementById("szobor_magassag") as HTMLInputElement;
  const submit = document.getElementById("submit");
  var szamoljunk = 0;
  osszesito!.textContent = "Szobrok száma a listában: "+lista.length+" , Szobrok összesített ára: "+ szamoljunk;
  submit!.addEventListener('click',(e)=>{
    e.preventDefault();
    try{
      lista.push(new Statue(nev.value.trim(),parseInt(ev.value),parseInt(ar.value),parseInt(magassag.value)));
      nev.value = "";
      ev.value = "";
      ar.value = "";
      magassag.value = "";
      document.getElementById("error")!.textContent = "";
      lista.forEach(element => {
        szamoljunk += element.price;
      });
      osszesito!.textContent = "Szobrok száma a listában: "+lista.length+" , Szobrok összesített ára: "+ szamoljunk;
      
    }
    catch(e){
      if (e instanceof Error) {
        document.getElementById("error")!.textContent = e.message;
        
      }
    }
  });
}


document.addEventListener('DOMContentLoaded',init);