document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("here\n");
    let btn, warning;
    btn = document.getElementsByTagName("input")[3];
    warning = document.querySelector(".warning");
    //le nom de la class
    let event = (e) =>{
        e.preventDefault();
        let User = {
            age: document.getElementsByTagName("input")[0].value,
            prenom: document.getElementsByTagName("input")[1].value
        };
        if (!User.age || !User.prenom || !isNaN(User.age)) {
            warning.style.display = "block";
            warning.classList.add("warning");
            warning.classList.remove("success");
            warning.textContent = "Champs vides: remplir les champs!";
        }
    }
    btn.addEventListener("click", event());
})