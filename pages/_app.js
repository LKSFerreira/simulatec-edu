import React from "react";
import "./style.css";

// Este componente será mantido entre as mudanças de rota
// Pense nisso como um componente de layout de nível superior
export default function MyApp({ Component, pageProps }) {
  // Component é a página atual e pageProps são as suas props
  return <Component {...pageProps} />;
}
