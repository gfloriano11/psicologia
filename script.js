function Whatsapp(){
    let numeroZap = "5547997936232"
    let urlZap = "https://wa.me/" + numeroZap
    window.open(urlZap, "_blank")
};

let zap = document.getElementById("icone_zap");
let icone = document.getElementById("icone_menu");
let menu = document.getElementById("menu")
let zapDenovo = document.getElementById("icone_zap_fixado")

zap.addEventListener("click", Whatsapp)
zapDenovo.addEventListener("click", Whatsapp)