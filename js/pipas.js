
// Pipas iniciais no localStorage
if (!localStorage.getItem("pipas")) {
    const pipasIniciais = [
        { id: 1, preco: 5, imagem: "../img/1.jpg" },
        { id: 2, preco: 10, imagem: "../img/2.jpg" },
        { id: 3, preco: 5, imagem: "../img/3.jpg" },
        { id: 4, preco: 10, imagem: "../img/4.jpg" },
        { id: 5, preco: 5, imagem: "../img/5.jpg" },
        { id: 6, preco: 5, imagem: "../img/6.jpg" }
    ];
    localStorage.setItem("pipas", JSON.stringify(pipasIniciais));
}

function carregarPipas() {
    const container = document.getElementById("listaPipas");
    container.innerHTML = "";

    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    pipas.forEach(pipa => {
        container.innerHTML += `
            <div class="card">
                <img src="${pipa.imagem}" alt="${pipa.nome}">
                <p>R$ ${pipa.preco}</p>
                <a href="pedido.html?id=${pipa.id}" class="btn">Fazer pedido</a>
            </div>
        `;
    });
}

carregarPipas();

// Função para cadastrar nova pipa
function cadastrarPipa(preco, imagem) {
    const pipas = JSON.parse(localStorage.getItem("pipas")) || [];

    const novaPipa = {
        id: pipas.length > 0 ? pipas[pipas.length - 1].id + 1 : 1,
        preco,
        imagem
    };

    pipas.push(novaPipa);
    localStorage.setItem("pipas", JSON.stringify(pipas));

    carregarPipas();
}