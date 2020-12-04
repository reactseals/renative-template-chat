import React from 'react';
import '../sharedStyles/globalWebStyles.css';
import '../sharedStyles/webFonts.css';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
}
