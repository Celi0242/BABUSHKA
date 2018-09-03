 document.addEventListener("DOMContentLoaded", hentJson);

 let retter;


 async function hentJson() {
     let jsonData = await fetch("json/menu.json");
     retter = await jsonData.json();

     console.log(retter);

     visRetter();
 }

 function visRetter() {
     let temp = document.querySelector(".retter-template");
     let modtager = document.querySelector(".container");
     retter.forEach(article => {
         let klon = temp.cloneNode(true).content;
         klon.querySelector(".data-navn").textContent = article.navn;
         klon.querySelector(".data-billede").src = "imgs/small/" + article.billede + "-sm.jpg";
         klon.querySelector(".data-billede").alt = "billede" + article.navn;
         klon.querySelector(".data-kortbeskrivelse").textContent = article.kortbeskrivelse;
         klon.querySelector(".data-pris").textContent = article.pris;
         modtager.appendChild(klon);
     });
 }
