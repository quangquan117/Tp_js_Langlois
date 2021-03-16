document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("here\n");
    let btn, warning, event, temp;
    btn = document.getElementsByTagName("input")[2];
    warning = document.querySelector(".warning");
    //le nom de la class
    event = () => {
        let User = {
            age: document.getElementsByTagName("input")[0].value,
            prenom: document.getElementsByTagName("input")[1].value
        };
        if (!User.age || !User.prenom || isNaN(User.age)) {
            console.log("here\n");
            warning.style.display = "block";
            warning.classList.add("warning");
            warning.classList.remove("success");
            warning.textContent = "Champs vides: remplir les champs!";
        }
        else {
            temp = 2021 - User.age;
            warning.style.display = "block";
            warning.classList.remove("warning");
            warning.classList.add("success");
            warning.textContent = `Bonjour ${User.prenom}, vous êtes né(e) en ${temp}`;
        }
    }
    btn.addEventListener("click", event);
})