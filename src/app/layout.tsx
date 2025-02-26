"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Script from "next/script";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";
// import global_br from "../translations/br/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {  
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    // br: {
    //   global: global_br,
    // }
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C338X59S3X"></Script>
      <Script id="google-analytics">
        {
          `
                window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C338X59S3X');
          `
        }
      </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <I18nextProvider i18n={i18next}>
            {loading ? <Loader /> : children}
          </I18nextProvider>
        </div>
      </body>
    </html>
  );
}
