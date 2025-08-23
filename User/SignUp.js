import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    const idade = parseInt(document.getElementById("idade").value);

    //if (!nome || !sobrenome || !email || !senha || !cpf || isNaN(idade)) {
        //alert('Por favor, preencha todos os campos corretamente.');
        //return;
    //}
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            // Não salve a senha!
            //const registro = { nome, sobrenome, email, cpf, idade };
            // Salvar no banco (descomente se usar Realtime Database)
            // push(ref(db, 'usuarios/'), registro)
            //     .then(() => {
            //         console.log('Cadastro realizado com sucesso!');
            //     })
            //     .catch((error) => {
            //         console.error('Erro ao realizar cadastro:', error);
            //     });
        })
        .catch((error) => {
            alert('Erro ao cadastrar: ' + error.message);
        });
}
window.Cadastrar = Cadastrar;