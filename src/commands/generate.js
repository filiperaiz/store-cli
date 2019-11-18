module.exports = {
    name: 'new',
    alias: ['n'],
    description: 'Criar uma nova loja',
    run: async toolbox => {
        const {
            system,
            filesystem,
            template,
            question,
            select,
            prompt,
            print,
            header,
            copyFiles
        } = toolbox

        header()

        const questions = [
            question.askName(),
            question.askFront(),
            question.askDev(),
            question.askGit(),
            question.askUrlDev(),
            question.askUrlHomolog(),
            question.askTwoStore()
        ]

        const {
            nameStore,
            frontStore,
            devStore,
            gitStore,
            urlDevStore,
            urlHomologStore,
            twoStore
        } = await prompt.ask(questions)

        let twoConfig = {}

        if (twoStore) {
            const selects = [
                select.askHeader(),
                select.askFooter(),
                select.askHome(),
                select.askProduct(),
                select.askCatalog(),
                select.askList()
            ]

            const {
                headerStore,
                footerStore,
                homeStore,
                productStore,
                catalogStore,
                listStore
            } = await prompt.ask(selects)

            twoConfig = {
                header: headerStore == undefined ? 1 : headerStore,
                footer: footerStore == undefined ? 1 : footerStore,
                home: homeStore == undefined ? 1 : homeStore,
                product: productStore == undefined ? 1 : productStore,
                catalog: catalogStore == undefined ? 1 : catalogStore,
                listproducts: listStore == undefined ? 1 : listStore
            }
        }

        const storeConfig = {
            name: nameStore,
            folder: `store-${nameStore}`,
            front: frontStore,
            dev: devStore,
            git: gitStore,
            urlDev: urlDevStore,
            urlHomolog: urlHomologStore
        }

        const confirm = await prompt.confirm('Criar loja?')
        if (!confirm) {
            print.error(`A loja não foi criada`)
            return
        }

        const spinner = toolbox.print.spin(
            'Aguarde enquanto a loja esta sendo configurada...'
        )

        spinner.start()

        await system.run(
            `git clone https://gitlab.com/rakutenbrasil/implantacao/store-custom-gulp.git`
        )

        const pathFolder = 'store-custom-gulp'

        filesystem.remove(`./${pathFolder}/.git`)
        filesystem.remove(`./${pathFolder}/store.config.js`)

        await template.generate({
            template: 'config.js.ejs',
            target: `${pathFolder}/store.config.js`,
            props: { storeConfig }
        })

        if (twoStore) {
            copyFiles(twoConfig, pathFolder)
        }

        filesystem.remove(`${pathFolder}/src/models`)
        filesystem.rename(
            `${pathFolder}`,
            `${storeConfig.folder.toLowerCase()}`
        )

        spinner.succeed('Configuração da loja concluída!!!')

        print.success(`Loja criada com sucesso`)
    }
}
