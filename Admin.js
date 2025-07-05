function listarIngressos() {
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    
    db.ref('compras/').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();

            const div = document.createElement('div');
            div.className = 'registro';
            div.innerHTML = `
                <strong>Comprado em: ${data.dataCompra}</strong><br>
                <strong>Ingresso: ${data.ingressoId}</strong><br>
                <strong>Nome: ${data.nome}</strong><br>
                <strong>Email: ${data.email}</strong><br>
                <strong>Quantidade: ${data.quantidade}</strong>
            `;
            lista.appendChild(div);
        });
    });
}

window.onload = listarIngressos();
