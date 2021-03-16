document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("here\n");
    let target, somme, sole, confirmation, stop;
    sole = 1000;
    target = document.querySelector("main p");
    stop = document.querySelector("main h2");
    somme = Number(prompt("Faites votre retrait"));
    console.log(somme);
    if (isNaN(somme)) {
        alert("Veuillez saisir des chiffre");
        location.reload();
    }
    else if (20 <= somme && somme <= 100)
        if (confirm("Confirmer la retrait?")) {
            sole -= somme;
            target.innerText = `retrait = ${somme}\nSolde = ${sole}`;
        } else
            stop.innerText = `Opération annulée`;
    else if (somme == 0) {
        alert("veillez saisir des chiffres");
        location.reload();
    }
    else {
        alert("Entre 20 et 100");
        location.reload();
    }
})