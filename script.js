function Whatsapp(){
    let numeroZap = "5547992606543"
    let urlZap = "https://wa.me/" + numeroZap
    window.open(urlZap, "_blank")
};

let zap = document.getElementById("icone_zap");
let icone = document.getElementById("icone_menu");
let menu = document.getElementById("menu")
menu.style.transform = "translateY(-101%)"

icone.addEventListener("click", function(){
    if (menu.style.transform == "translateY(0%)"){
        console.log("Tá abrindo")
        menu.style.transform = "translateY(-101%)"
    } else {
        console.log("Tá fechando")
        menu.style.transform = "translateY(0%)"
    }
});

zap.addEventListener("click", Whatsapp)