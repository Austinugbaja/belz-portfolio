import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/style.css";
import GoToTop from "../components/goToTop/GoToTop";
import Spinner from "react-spinners/BounceLoader"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Component {...pageProps} />
          <GoToTop />
        </>
      ) : (
        <div className="center-page">
          <Spinner loading={loading} size={50} color="#FCD0D0" />
        </div>
      )}
    </>
  );
}
