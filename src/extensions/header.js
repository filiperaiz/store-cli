const package = require('../../package.json')

module.exports = toolbox => {
    toolbox.header = () => {
        const {
            info,
            colors: { blue, bold, white }
        } = toolbox.print
        info('')
        info('')
        info(white(`# ============================================== #`))
        info(white(`#                                                #`))
        info(
            white(
                `#               GenStore CLI v${package.version}              #`
            )
        )
        info(white(`#                                                #`))
        info(white(`#  ${package.description}  #`))
        info(white(`#                                                #`))
        info(white(`# ============================================== #`))
        info('')
        info('')
    }
}
