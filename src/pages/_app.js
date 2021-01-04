/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../sharedStyles/globalWebStyles.css';
import '../sharedStyles/webFonts.css';
import { ProvideAuth } from '../utils/auth';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}
