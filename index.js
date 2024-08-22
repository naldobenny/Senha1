const prompt = require('prompt-sync')();

const senhaCorreta = '2024';

function solicitarSenha() {
    const senha = prompt('Digite a senha: ');

    if (senha === senhaCorreta) {
        console.log('Meus parabéns sua senha está correta!');
        process.exit();
    } else {
        console.log('Senha incorreta. Tente novamente.');
        solicitarSenha();
    }
}

solicitarSenha();
