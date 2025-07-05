function CadastrarIngresso() {
    const nome = document.getElementById('nome').value.trim();
    const quantidade = parseInt(document.getElementById('quantidade').value, 10);
    const preco = parseFloat(document.getElementById('preco').value);


    const registro = {
    nome,
    quantidade,
    preco
    };
    
    db.ref('ingressos/').push(registro)
    .then(() => {
        console.log('Ingresso cadastrado com sucesso!');
        listarIngressos();
    }).catch((error) => {
        console.error('Erro ao cadastrar ingresso:', error);
    });
    }
    
function listarIngressos() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    db.ref('ingressos/').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            const div = document.createElement('div');
            div.className = 'registro';
            div.innerHTML = `<strong>Tipo do ingresso: </strong>${data.nome} <strong>Quantidade: </strong><em>${data.quantidade}</em> <strong>Preço: </strong>R$${data.preco}`
            lista.appendChild(div);
        });
    });
}

window.onload = listarIngressos();
