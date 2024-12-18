const story = {
  start: {
    title: "A Grande Escolha",
    text: "Você está em frente ao banco. O que deseja fazer?",
    options: [
      { text: "Usar ilusionismo para distrair os guardas", next: "illusion" },
      { text: "Hackear o sistema de segurança", next: "hack" },
    ],
  },
  illusion: {
    title: "Truque de Mestre",
    text: "Seu truque de ilusionismo distrai os guardas. Você entra no banco! Qual é o próximo passo?",
    options: [
      { text: "Ir direto para o cofre", next: "vault" },
      { text: "Explorar os corredores para evitar câmeras", next: "explore" },
    ],
  },
  hack: {
    title: "Erro Fatal",
    text: "Você tenta hackear o sistema, mas ativa um alarme! Guardas estão vindo.",
    options: [
      { text: "Fugir rapidamente", next: "caught" },
      { text: "Tentar desativar o alarme", next: "laser" },
    ],
  },
  vault: {
    title: "O Cofre",
    text: "Você chega ao cofre. Está protegido por lasers e trancas biométricas.",
    options: [
      { text: "Desativar os lasers usando um espelho", next: "success" },
      { text: "Tentar hackear a biometria", next: "caught" },
    ],
  },
  explore: {
    title: "Nos Corredores",
    text: "Enquanto explora os corredores, você encontra um sistema de câmeras.",
    options: [
      { text: "Desativar as câmeras", next: "laser" },
      { text: "Esconder-se e esperar", next: "hide" },
    ],
  },
  laser: {
    title: "Alarme Desativado",
    text: "Você desativou o alarme, mas os guardas já estão alertas!",
    options: [
      { text: "Continuar para o cofre", next: "vault" },
      { text: "Fugir", next: "caught" },
    ],
  },
  hide: {
    title: "Escondido",
    text: "Você encontra um lugar para se esconder, mas o tempo está acabando.",
    options: [
      { text: "Voltar para o cofre", next: "vault" },
      { text: "Escapar do banco", next: "escape" },
    ],
  },
  caught: {
    title: "Capturado",
    text: "Você foi capturado pela polícia. Fim de jogo.",
    options: [],
  },
  success: {
    title: "Sucesso",
    text: "Você roubou o dinheiro e fugiu sem deixar rastros. Parabéns, você venceu!",
    options: [],
  },
  escape: {
    title: "Fuga Bem-Sucedida",
    text: "Você escapou do banco antes que os guardas o pegassem, mas saiu sem nada. Pelo menos está livre.",
    options: [],
  },
};

function renderStory(state) {
  const titleElement = document.getElementById("scene-title");
  const narrativeElement = document.getElementById("narrative");
  const choicesElement = document.getElementById("choices");

  const currentScene = story[state];

  titleElement.textContent = currentScene.title;
  narrativeElement.innerHTML = `<p>${currentScene.text}</p>`;

  choicesElement.innerHTML = "";

  currentScene.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;

    button.addEventListener("click", () => {
      renderStory(option.next);
    });

    choicesElement.appendChild(button);
  });
}

function startGame() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  renderStory("start");
}

document.getElementById("start-game").addEventListener("click", startGame);
