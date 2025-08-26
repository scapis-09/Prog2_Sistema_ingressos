import { auth, db } from './DataBase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, push } from "firebase/database";

function Cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    const idade = parseInt(document.getElementById("idade").value);

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            // Salvar dados no Realtime Database
            //push(ref(db, 'usuarios/'), { nome, sobrenome, email, cpf, idade });
            //alert('Cadastro realizado com sucesso!');
        })
        .catch((error) => {
            alert('Erro ao cadastrar: ' + error.message);
        });
}

window.Cadastrar = Cadastrar;

document.getElementById("btnCadastrar").addEventListener("click", Cadastrar);