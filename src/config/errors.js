export default {
    login: {
        messageBycode: {
            'auth/invalid-email' : 'Este não é um e-mail válido!',
            'auth/user-disabled': 'Este e-mail corresponde a um usuário excluído!',
            'auth/user-not-found': 'Não existe um usuário com este e-mail!',
            'auth/wrong-password': 'Sua senha esta incorreta!'
        },
        customMessages: {
            nameEmpty: 'Opa! Não esqueça do seu nome!',
            emailEmpty: 'Opa! Você esqueceu do e-mail!',
            passwordEmpty: 'Opa! Você esqueceu da senha!',
        }
    },
    signUp: {
        messageBycode: {
            'auth/email-already-in-use' : 'Este email já esta sendo utilizado, escolha outro.',
            'auth/invalid-email': 'Desculpe, o email esta correto? Escreva um email válido.',
            'auth/operation-not-allowed': 'Esta conta foi desabilitada!',
            'auth/weak-password': 'Escolha uma senha mais forte!'
        },
        customMessages: {
            nameEmpty: 'Opa! Não esqueça do seu nome!',
            emailEmpty: 'Opa! Você esqueceu do e-mail!',
            passwordEmpty: 'Opa! Você esqueceu da senha!',
            passwordConfirmationEmpty: 'Opa! Por favor, confirme sua senha!'
        }
    },
    passwordRecovery: {
        messageBycode: {
            'auth/invalid-email' : 'Opa! Desculpe, este não é um email válido!',
            'auth/user-not-found': 'Ops, não existe um usuário com este endereço de email!'
        },
        customMessages: {
            emptyEmail: 'Opa, para isto, por favor escreva seu email!'
        }
    }
}