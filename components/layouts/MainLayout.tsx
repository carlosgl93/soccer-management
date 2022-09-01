import { FC, PropsWithChildren, useState } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";
import SideMenu from "../ui/SideMenu";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

const MainLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
