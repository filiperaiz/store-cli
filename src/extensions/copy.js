module.exports = toolbox => {
    toolbox.copyFiles = (template, pathFolder) => {
        const { filesystem } = toolbox

        const folders = [
            'catalog',
            'footer',
            'header',
            'home',
            'listproducts',
            'product'
        ]

        const templateNumber = folder => {
            const keys = Object.keys(template)
            const values = Object.values(template)

            for (let i = 0; i < keys.length; i++) {
                const element = keys[i]

                if (element == folder) {
                    return values[i]
                }
            }
        }

        folders.forEach(folder => {
            const number = templateNumber(folder)

            const pathFrom = `./${pathFolder}/src/models/${folder}/${number}`
            const pathTo = `./${pathFolder}/src`

            const fromTemplate = `${pathFrom}/templates`
            const fromPages = `${pathFrom}/pages`
            const fromComponents = `${pathFrom}/components`
            const fromJs = `${pathFrom}/js`

            const toTemplate = `${pathTo}/templates/${folder}`
            const toPages = `${pathTo}/assets/scss/pages`
            const toComponents = `${pathTo}/assets/scss/components`
            const toJs = `${pathTo}/assets/js/pages`

            filesystem.copy(fromTemplate, toTemplate, {
                overwrite: true,
                matching: '*.html'
            })

            filesystem.copy(fromPages, toPages, {
                overwrite: true,
                matching: '*.scss'
            })

            filesystem.copy(fromComponents, toComponents, {
                overwrite: true,
                matching: '*.scss'
            })

            filesystem.copy(fromJs, toJs, {
                overwrite: true,
                matching: '*.js'
            })
        })
    }
}
