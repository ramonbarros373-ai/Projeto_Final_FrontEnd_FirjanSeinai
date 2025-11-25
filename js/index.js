//Botao de tema inicio

const btnTema = document.getElementById('btnTema');
// Configuraçao da posiçao do botao inicio
// btnTema.style.top = "14px";
// btnTema.style.right = "72px";
// Configuraçao da posiçao do botao fim
let darkMode = false;
const navbar = document.getElementById('mnNvB');


btnTema.onclick = function () {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode-active');
    if (document.body.classList.contains('dark-mode-active')) {
        document.body.style.background = '#222';
        document.body.style.color = '#eee';
        btnTema.textContent = '☀️';
        btnTema.style.background = '#333';
        btnTema.style.color = '#fff';
        //oq entrou novo
        navbar.classList.remove('bg-body-tertiary');
        navbar.classList.add('bg-dark', 'border-bottom', 'border-body');
        navbar.setAttribute('data-bs-theme', 'dark');

    } else {
        document.body.style.background = '#fff';
        document.body.style.color = '#222';
        btnTema.textContent = '🌙';
        btnTema.style.background = '#fff';
        btnTema.style.color = '#222';
        //oq entrou novo
        navbar.classList.remove('bg-dark', 'border-bottom', 'border-body');
        navbar.classList.add('bg-body-tertiary');
        navbar.setAttribute('data-bs-theme', 'light')
    }
};

//Botao de tema fim
//Botao de retorno inicio
const btnTop = document.getElementById("btnTop");

// Configurar o estilo fixo do botão
btnTop.style.position = "fixed";
// btnTop.style.bottom = "45px";
// btnTop.style.right = "26px";
// btnTop.style.display = "none"; // Inicialmente oculto

// Mostrar o botão apenas quando o usuário rolar para baixo
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    // btnTop.style.display = "none";
  }
};

// Ao clicar, rola suavemente para o topo
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//Botao de retorno fim

// criar uma funçao para que o botao rede mude o paddin-left de 45% para 15% quando a tela diminuir, feito sem  js.

//Botoes de tema inicio
const btnTemaA = document.getElementById('btnTemaA');

btnTemaA.onclick = function (){
    const videoElement = document.createElement('video');
    videoElement.src = '../img/vecteezy_prismatic-iridescent-gradient-surface-with-wavy-motion-and_54525645.mp4';
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    videoElement.style.zIndex = '-1';
    document.body.appendChild(videoElement);
    // document.body.style.background = 'green';
    // document.body.style.color = 'yellow';
}

const btnTemaB = document.getElementById('btnTemaB');

btnTemaB.onclick = function (){
    const videoElement = document.createElement('video');
    videoElement.src = '../img/vecteezy_sparkling-stars-on-a-black-background_2018554.mp4';
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    videoElement.style.zIndex = '-1';
    document.body.appendChild(videoElement);
    // document.body.style.background = 'green';
    document.body.style.color = 'white';
}

const btnTemaC = document.getElementById('btnTemaC');

btnTemaC.onclick = function (){
    const videoElement = document.createElement('video');
    videoElement.src = '../img/112836-697207951.mp4';
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    videoElement.style.zIndex = '-1';
    document.body.appendChild(videoElement);
    // document.body.style.background = 'green';
    // document.body.style.color = 'yellow';
}

//Botoes de tema fim