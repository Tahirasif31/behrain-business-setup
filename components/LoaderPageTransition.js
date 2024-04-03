"use client";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useRouter } from "next/navigation";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.pathname) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      setLoading(false);
    };

    if (router) {
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    }
  }, [router]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
