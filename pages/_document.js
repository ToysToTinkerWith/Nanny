import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="nanny" content="Bellingham Nanny Connection providing nanny services in the Bellingham area." />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" type="image/png" href="/favicon.png"/>
          
        </Head>
        <body style={{ backgroundColor: "#e1bee7"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}