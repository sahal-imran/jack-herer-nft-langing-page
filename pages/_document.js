import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link
                    rel="preload"
                    href="/fonts/helveticaneue.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeueBold.ttf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeueMedium.otf"
                    as="font"
                    type="font/woff"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/HelveticaNeueUltraLight.ttf"
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