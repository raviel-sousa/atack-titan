const heroi = [
    {
        "nome": "Eren Yeager",
        "descricao": "Taque o terror nos sonhos de vitória dos seus oponentes! Darkrai está com tudo pronto para mostrar seus piores pesadelos no Pokémon UNITE.",
        "ataque": 4.5,
        "resistencia": 1.5,
        "mobilidade": 3,
        "pontuacao": 2,
        "apoio": 2,
        "url": "./assets/eren-yeager.jpg"
    },
    {
        "nome": "Mikasa Ackermann",
        "descricao": "Adicione um Defensor corpo a corpo à sua equipe do Pokémon UNITE com um Pokémon espectral que está prestes a aterrorizar seus oponentes.",
        "ataque": 2,
        "resistencia": 4,
        "mobilidade": 2,
        "pontuacao": 2.5,
        "apoio": 2.5,
        "url": "./assets/mikasa-ackermann.jpeg"
    },
    {
        "nome": "Armin Arlert",
        "descricao": "Ataque com a força de um relâmpago ou a com implacabilidade da correnteza de um rio.",
        "ataque": 4.5,
        "resistencia": 3,
        "mobilidade": 2.5,
        "pontuacao": 2.5,
        "apoio": 1,
        "url": "./assets/armin-arlert.jpeg"
    }
];

var novoPersonagem = document.querySelector("#novoPersonagem");
const button = document.querySelector("#button");
const nomePersonagemInput = document.querySelector("#nomePersonagem");
const ataqueInput = document.querySelector("#ataque");
const resistenciaInput = document.querySelector("#resistencia");
const mobilidadeInput = document.querySelector("#mobilidade");
const pontuacaoInput = document.querySelector("#apoio");
const imput_imagem = document.querySelector("#imput_imagem"); 

adicionarPersonagens();

function adicionarPersonagens() {
    novoPersonagem.innerHTML = "";
    for (let i = 0; i < heroi.length; i++) {
        novoPersonagem.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="heroi">
                    <img src="${heroi[i].url}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <p class="card-text fw-bolder fst-italic">${heroi[i].nome}</p>
                </div>
            </div>`;
    }
}

button.addEventListener("click", e => {
    e.preventDefault();

    const nomePersonagem = nomePersonagemInput.value;
    const ataque = parseFloat(ataqueInput.value);
    const resistencia = parseFloat(resistenciaInput.value);
    const mobilidade = parseFloat(mobilidadeInput.value);
    const pontuacao = parseFloat(pontuacaoInput.value);
    const reader = new FileReader();

    reader.onload = (event) => {
        const newCharacter = {
            nome: nomePersonagem,
            ataque: ataque,
            resistencia: resistencia,
            mobilidade: mobilidade,
            pontuacao: pontuacao,
            url: event.target.result // A URL da imagem puxada
        };

        heroi.push(newCharacter);
        adicionarPersonagens();
    };

    if (imput_imagem.files.length > 0) { // Verifica se existe arquivos selecionados
        reader.readAsDataURL(imput_imagem.files[0]); // Lê o primeiro arquivo como URL de dados
    } else {
        alert("Por favor, selecione uma imagem.");
    }
});