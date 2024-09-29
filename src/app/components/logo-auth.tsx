
import React from "react";
import Link from "next/link";
import Image from "next/image";
const LogoAuth = () => {
  

  return (
    <div className="px-26 py-13 text-center aurora_opacity">
              <Link className="mb-5.5 inline-block" href="/">
                <picture>
                  {/* Imagen para modo oscuro */}
                  <source srcSet="/images/logo/logo_opaur_blanco.svg" media="(prefers-color-scheme: dark)" />
                  {/* Imagen para modo claro */}
                  <img src="/images/logo/logo_opaur_aurora.svg" alt="Logo Opaur" 
                      width={200}
                      height={90} />
                </picture>
              </Link>

              <p className="2xl:px-20">
                Welcome to the new era of branding. At Opaur, we transform data into strategies that connect.
              </p>

              <span className="mt-15 inline-block">
                <Image
                width={420}
                height={150}
                src={"/images/illustration/ilustration-login.svg"}
                alt="Ilustration page opaur"
                />
              </span>
            </div>
  );
};

export default LogoAuth;
