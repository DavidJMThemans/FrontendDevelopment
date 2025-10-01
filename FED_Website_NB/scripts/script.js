// JavaScript Document
console.log("Ik weet het af en toe niet meer...");

const hidden = document.getElementsByClassName("hidden");
const knop = document.getElementById("klantenservice");

function toggleMenu() {
    document.getElementsByClassName("hidden").classList.remove("hidden");
}

knop.addEventListener("click", toggleMenu);