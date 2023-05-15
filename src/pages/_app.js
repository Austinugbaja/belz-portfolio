import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/style.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return <Component {...pageProps} />;
}
