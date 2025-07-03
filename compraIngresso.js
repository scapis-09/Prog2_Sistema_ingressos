function listarIngressos() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    db.ref('ingressos/').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            const key = childSnapshot.key; // Pega o ID do ingresso

            const div = document.createElement('div');
            div.className = 'registro';
            div.innerHTML = `
                <strong>${data.nome}</strong><br>
                <em>Quantidade restante: ${data.quantidade}</em><br>
                <strong>Preço: ${data.preco}</strong>
                <input type="number" id="qtd-${key}" min="1" max="${data.quantidade}" placeholder="Qtd" style="width:50px; margin-left:10px;">
                <button onclick="comprarIngresso('${key}')">Comprar</button>
            `;
            lista.appendChild(div);
        });
    });
}

// Função para receber as informações do botão
function comprarIngresso(key) {
    const input = document.getElementById(`qtd-${key}`);
    const quantidade = parseInt(input.value, 10);

    // Novos campos
    const nome = document.getElementById('comprador-nome').value.trim();
    const email = document.getElementById('comprador-email').value.trim();

    if (!nome || !email) {
        alert('Preencha nome e email!');
        return;
    }

    if (!quantidade || quantidade < 1) {
        alert('Informe uma quantidade válida!');
        return;
    }

    db.ref(`ingressos/${key}`).once('value', (snapshot) => {
        const data = snapshot.val();
        if (data.quantidade >= quantidade) {
            // Salva a compra
            db.ref('compras/').push({
                ingressoId: key,
                nome,
                email,
                quantidade,
                dataCompra: new Date().toISOString()
            }).then(() => {
                // Atualiza a quantidade no banco de dados
                const novaQuantidade = data.quantidade - quantidade;
                db.ref(`ingressos/${key}`).update({ quantidade: novaQuantidade })
                    .then(() => {
                        alert(`Compra realizada com sucesso! ${quantidade} ingresso(s) comprado(s).`);
                        listarIngressos(); // Atualiza a lista de ingressos
                    })
                    .catch((error) => {
                        console.error('Erro ao atualizar a quantidade:', error);
                    });
            }).catch((error) => {
                console.error('Erro ao registrar a compra:', error);
            });
        } else {
            alert('Quantidade solicitada não disponível.');
        }
    });
}

window.onload = listarIngressos();