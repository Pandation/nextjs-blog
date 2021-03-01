import "tailwindcss/tailwind.css";
import { wrapper } from "../redux/store";
import '../styles/globals.css';

const App = function ({ Component, pageProps}) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(App);