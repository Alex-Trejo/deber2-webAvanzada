const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Otras opciones de configuración de Webpack aquí...

  // Configuración para excluir los módulos del sistema de archivos de Node.js
  externals: [nodeExternals()],

  resolve: {
    fallback: {
      fs: false, // Opcionalmente puedes configurar 'fs' como 'false' si no lo necesitas
      path: require.resolve("path-browserify")
    }
  }
};
