const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`;

        const nomePersongem = document.getElementById('nome-personagem')
        nomePersongem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
}) 