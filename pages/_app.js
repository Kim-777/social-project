import App from "next/app";
import Layout from '../components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';


class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        // console.log(appContext);

        let pageProps = {};

        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp