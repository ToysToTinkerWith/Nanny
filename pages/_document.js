import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description" content="View and take care of public trees from all across the world. Become part of a global community that cares for the trees around them." />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" type="image/png" href="/favicon.png"/>
          
        </Head>
        <body style={{ backgroundColor: "#ffcdd2"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
