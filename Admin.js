function listarIngressos() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    db.ref('compras/').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();

            const div = document.createElement('div');
            div.className = 'registro';
            div.innerHTML = `
                <strong>${data.dataCompra}</strong><br>
                <em>Quantidade restante: ${data.email}</em><br>
                <strong>Preço: ${data.ingressoId}</strong>
                <strong>Preço: ${data.nome}</strong>
                <strong>Preço: ${data.quantidade}</strong>
            `;
            lista.appendChild(div);
        });
    });
}

window.onload = listarIngressos();