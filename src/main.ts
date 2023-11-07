import {Statue} from './Statue';

var lista : Artwork[];

function init(){
  lista = [];
  const nev = document.getElementById("szobor_nev") as HTMLInputElement;
  const ev = document.getElementById("szobor_ev") as HTMLInputElement;
  const ar = document.getElementById("szobor_ar") as HTMLInputElement;
  const magassag = document.getElementById("szobor_magassag") as HTMLInputElement;
  const submit = document.getElementById("submit");
  submit!.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("mom");
  });
}


document.addEventListener('DOMContentLoaded',init);