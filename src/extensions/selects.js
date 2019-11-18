module.exports = toolbox => {
    toolbox.select = {
        askHeader: () => ({
            type: 'list',
            name: 'headerStore',
            message: 'Qual modelo de header?',
            initial: 1,
            choices: ['1', '2', '3', '4']
        }),

        askFooter: () => ({
            type: 'list',
            name: 'footerStore',
            message: 'Qual modelo de footer?',
            initial: 1,
            choices: ['1', '2', '3']
        }),

        askHome: () => ({
            type: 'list',
            name: 'homeStore',
            message: 'Qual modelo da home?',
            initial: 1,
            choices: ['1', '2', '3']
        }),

        askProduct: () => ({
            type: 'list',
            name: 'productStore',
            message: 'Qual modelo de detalhe do produto?',
            initial: 1,
            choices: ['1', '2']
        }),

        askCatalog: () => ({
            type: 'list',
            name: 'catalogStore',
            message: 'Qual modelo de catálogo?',
            initial: 1,
            choices: ['1']
        }),

        askList: () => ({
            type: 'list',
            name: 'listStore',
            message: 'Qual modelo da listagem de produto?',
            initial: 1,
            choices: ['1', '2', '3']
        })
    }
}
