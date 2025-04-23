// import quando tem mais coisa para importar do mesmo arquivo, ou uma coisa sem default
import { consoles, colors } from './module.js'

// import quando só tem uma coisa para imoortar e usando default
import calcular from './calc.js'

consoles(colors.primary)
calcular(4, 2)