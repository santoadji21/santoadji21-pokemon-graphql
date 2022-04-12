/**
 *
 * @components Page MyPokemon
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 *
 */

import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/index.js";
import Hero from "../../components/hero/index.js";
import Layout from "../../components/Layout.js";
import MypokemonCard from "../../components/mypokemoncard";

export default function MyPokemon() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("mypokemon"));
    setItems(items);
  }, [items]);

  //local storage remove item by id
  const removeItem = (owner) => {
    const newItems = items.filter((item) => item.owner !== owner);
    localStorage.setItem("mypokemon", JSON.stringify(newItems));
    console.log(newItems);
  };

  return (
    <Layout title={"My Pokemon List"}>
      <Hero />
      <div className="container mx-auto">
        {items !== null || items !== 0? (
          <div className="grid lg:grid-cols-5 md:grid-cols-4  gap-4">
            {items.map((pokemon) => (
              <MypokemonCard
                key={pokemon.owner}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                url={pokemon.url}
                owner={pokemon.owner}
                release={() => removeItem(pokemon.owner)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold">You don`t have any pokemon</h1>
          </div>
        )}
      </div>
      <Footer />
    </Layout>
  );
}
