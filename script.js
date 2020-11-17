var skaits = 0;

document.getElementById("poga").onclick = function skaitit() {
    skaits = skaits + 1;
    document.getElementById('skaits').innerHTML='Tu esi nospiedis pogu ' + skaits + " reizes.";

    document.body.classList.toggle("dark");
}