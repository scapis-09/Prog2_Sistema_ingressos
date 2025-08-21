function Cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    const idade = parseInt(document.getElementById("idade").value);

    if (!nome || !sobrenome || !email || !senha || !cpf || isNaN(idade)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    else if (idade < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return;
    }
    else{
        const registro = { nome, sobrenome, email, senha, cpf, idade };

        db.ref('usuarios/').push(registro)
            .then(() => {
                console.log('Cadastro realizado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao realizar cadastro:', error);
            });
    }
    

    
}