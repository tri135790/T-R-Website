import Document, { Html, Head, Main, NextScript } from 'next/document';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default MyDocument;