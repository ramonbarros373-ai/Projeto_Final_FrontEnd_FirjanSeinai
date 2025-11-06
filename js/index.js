//Botao de tema inicio

const btn = document.getElementById('btn-tema');
let darkMode = false;
const navbar = document.getElementById('mnNvB');

btn.onclick = function () {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode-active');
    if (document.body.classList.contains('dark-mode-active')) {
        document.body.style.background = '#222';
        document.body.style.color = '#eee';
        btn.textContent = '☀️';
        btn.style.background = '#333';
        btn.style.color = '#fff';
        //oq entrou novo
        navbar.classList.remove('bg-body-tertiary');
        navbar.classList.add('bg-dark', 'border-bottom', 'border-body');
        navbar.setAttribute('data-bs-theme', 'dark');

    } else {
        document.body.style.background = '#fff';
        document.body.style.color = '#222';
        btn.textContent = '🌙';
        btn.style.background = '#fff';
        btn.style.color = '#222';
        //oq entrou novo
        navbar.classList.remove('bg-dark', 'border-bottom', 'border-body');
        navbar.classList.add('bg-body-tertiary');
        navbar.setAttribute('data-bs-theme', 'light')
    }
};

//Botao de tema fim

// criar uma funçao para que o botao rede mude o paddin-left de 45% para 15% quando a tela diminuir, feito sem  js.



