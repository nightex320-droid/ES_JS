const tarea = document.querySelector("textarea");
const fipt = document.querySelector("#findtxt");
const repipt = document.querySelector("#newtxt");
const btn = document.querySelector("button");

btn.addEventListener('click', () => {
    const findtxt = fipt.value;
    const newtxt = repipt.value;

    let tagtxt = tarea.value;

    tagtxt = tagtxt.replaceAll(findtxt,newtxt);

    const newelm = document.createElement("h2");

    newelm.innerText = tagtxt;

    document.body.appendChild(newelm);

});





