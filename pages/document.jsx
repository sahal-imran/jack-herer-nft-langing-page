import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/HelveticaNeue.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/HelveticaNeue\ Thin.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/helveticaneueRegular.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/HelveticaNeue\ Medium.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/Helvetica\ Neu\ Bold.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeue/HelveticaNeueHv.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}