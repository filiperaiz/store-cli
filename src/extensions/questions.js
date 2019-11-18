module.exports = toolbox => {
    toolbox.question = {
        askName: () => ({
            type: 'input',
            name: 'nameStore',
            message:
                'Qual o nome da loja? (Mesmo nome que está na pasta do ambiente de desenvolvimento)'
        }),

        askFront: () => ({
            type: 'input',
            name: 'frontStore',
            message: 'Qual o nome do front da loja?'
        }),

        askDev: () => ({
            type: 'input',
            name: 'devStore',
            message: 'Qual o nome do dev da loja?'
        }),

        askGit: () => ({
            type: 'input',
            name: 'gitStore',
            message: 'Qual a url do Gitlab da loja?'
        }),

        askUrlDev: () => ({
            type: 'input',
            name: 'urlDevStore',
            message: 'Qual a url de desenvolvimento da loja?'
        }),

        askUrlHomolog: () => ({
            type: 'input',
            name: 'urlHomologStore',
            message: 'Qual a url de homologação da loja?'
        }),

        askTwoStore: () => ({
            type: 'confirm',
            name: 'twoStore',
            message: 'Loja modelo TWO?'
        })
    }
}
