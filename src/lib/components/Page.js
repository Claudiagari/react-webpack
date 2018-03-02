// page.js
import React from 'react'

// ... aqui va la definicion de tu componentes
// y los `pageProps` por defecto

// Quitamos el siguiente codigo
/*
ReactDOM.render(
  <Page {...pageProps} />,
  document.getElementById('container')
);
*/

// exportamos las propiedades dinámicas por defecto de la página
// con el nombre "defaultPageProps"
export const defaultPageProps = pageProps

// exportamos por defecto el componente `Page`
export default Page