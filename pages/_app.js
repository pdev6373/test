import "../styles/globals.css";
import { Sidebar } from "../components/sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
