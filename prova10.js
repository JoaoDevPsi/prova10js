const inputTarefa = document.getElementById('novaTarefa');
const btnAdicionar = document.getElementById('adicionarTarefa');
const listaTarefas = document.getElementById('listaTarefas');

btnAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== '') {
        const novaTarefa = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const spanTarefa = document.createElement('span');
        spanTarefa.textContent = textoTarefa;
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';

        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(spanTarefa);
        novaTarefa.appendChild(btnRemover);
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = '';

        btnRemover.addEventListener('click', () => {
            listaTarefas.removeChild(novaTarefa);
        });

        checkbox.addEventListener('change', () => {
            novaTarefa.classList.toggle('completed');
        });
    }
}