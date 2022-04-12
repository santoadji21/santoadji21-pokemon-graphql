import Head from "next/head";

/**
 * 
 * @components Layout
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 * 
 */

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Pokemon | Tokopedia Technical Test",
  description: "The Unofficial Pokémon Website",
  keywords: "pokemon, bulbasaur, charmander, charmeleon",
};
