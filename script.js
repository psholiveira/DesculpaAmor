const nomeDela = "";
const frases = [
    "Motivo oficial: sentir sua falta dói mais que admitir que eu errei.",
    "Versão resumida: eu fui bobinho, você é incrível, fim.",
    "Se existir um curso de como ser o melhor namorado do mundo, eu tô matriculado.",
    "Dizem que ninguém é perfeito, mas você é quase. Eu que estraguei a estatística.",
    "Não quero ter razão, eu quero ter você. 💞",
    "Se arrependimento queimasse, dava pra incendiar uma cidade inteira só com o meu.",
];

// --------- CÓDIGO ---------
const phraseElement = document.getElementById("phrase");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("closeOverlay");

// Ajusta o nome dela na frase, se você tiver colocado
if (nomeDela) {
    document.querySelector(".highlight-name").textContent = nomeDela + " 2.0 merece o melhor de mim.";
}

// Troca de frases
let idx = 0;
setInterval(() => {
    idx = (idx + 1) % frases.length;
    phraseElement.classList.remove("active");
    setTimeout(() => {
        phraseElement.textContent = "💗 " + frases[idx];
        phraseElement.classList.add("active");
    }, 200);
}, 3500);

// Botão "Não" que foge
btnNo.addEventListener("mouseenter", () => {
    const container = document.querySelector(".card");
    const rect = container.getBoundingClientRect();

    const maxX = rect.width - btnNo.offsetWidth - 20;
    const maxY = 70; // limite pra não fugir demais pra baixo

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.position = "relative";
    btnNo.style.left = randomX - (btnNo.offsetLeft - 20) + "px";
    btnNo.style.top = -(randomY) + "px";
});

// Função pra criar coraçõezinhos na tela
function createHearts(x, y) {
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";

        const offsetX = (Math.random() - 0.5) * 160;
        const offsetY = (Math.random() - 0.5) * 40;

        heart.style.left = x + offsetX + "px";
        heart.style.top = y + offsetY + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1600);
    }
}

// Quando clicar em "Sim"
btnYes.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    createHearts(x, y);
    overlay.classList.add("active");
});

// Fechar overlay
closeOverlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// Se ela clicar fora do card também fecha
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});
