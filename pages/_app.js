
import React from "react";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
        <Component {...pageProps} />
    </React.Fragment>
  );
}
