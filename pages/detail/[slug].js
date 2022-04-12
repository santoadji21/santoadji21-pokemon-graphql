/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/**
 *
 * @components Page Detail Pokemon
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 *
 */

import React, { useState } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { request } from "graphql-request";
import { Dialog } from "@headlessui/react";
import { FaWeight } from "react-icons/fa";

import Layout from "../../components/Layout.js";
import Hero from "../../components/hero";
import Footer from "../../components/footer";

export default function Detail({ data }) {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFalseCatch, setIsFalseCatch] = useState(false);

  function catchPokemon() {
    if (Math.random() >= 0.5) {
      setIsOpen(true);
      setIsFalseCatch(false);
    } else {
      setIsFalseCatch(true);
      setIsOpen(false);
    }
  }

  // save to local storage
  const saveToLocalStorage = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      let items = [];
      items = JSON.parse(localStorage.getItem("mypokemon")) || [];
      let found =
        items.find(
          (item) => item.owner.toUpperCase() === name.toUpperCase()
        ) !== undefined;

      if (found) {
        alert("Pokemon already in your collection");
        setIsOpen(false);
      } else {
        // items.filter((item) => item.owner !== data.owner);
        data.owner = name;
        items.push(data);
        localStorage.setItem("mypokemon", JSON.stringify(items));
        alert("Pokemon added to your collection");
        setIsOpen(false);
      }
    }
  };

  // console.log("Berhasil");
  // console.log(isOpen);
  // console.log("Gagal");
  // console.log(isFalseCatch);

  const Titlename = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  return (
    <Layout title={`Detail Pokemon | ${Titlename}`}>
      <Hero />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt={data.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:self-end ">
          <div className="mt-4">
            <h1 className="text-3xl uppercase tracking-widest font-extrabold sm:text-4xl">
              {data.name}
            </h1>
          </div>
          <div className="divider"></div>
          <h1 className="text-2xl mt-3 mb-4">Ability</h1>
          <div className="flex mb-3 gap-2">
            {data.abilities.map((ability) => (
              <button
                key={ability.ability.name}
                className="btn btn-xs lowercase"
              >
                {ability.ability.name}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <h1 className="text-2xl mt-3 mb-4">Type</h1>
          <div className="flex mb-3 gap-2">
            {data.types.map((type) => (
              <button
                key={type.type.name}
                className="btn btn-sm capitalize  gap-2"
              >
                {type.type.name}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          {/* <h1 className="text-2xl mt-3 mb-1">Move</h1>
          <div className="flex mb-3 flex-wrap gap-2">
          {data.moves.map((move) => (
            <button key={move.move.name} className="btn btn-sm lowercase">
              {move.move.name}
            </button>
          ))}
        </div> */}
          <section aria-labelledby="information-heading" className="mt-4">
            <div className="flex items-center">
              <div className="rating items-center rating-sm mt-3 mb-3 gap-3">
                <FaWeight size={20} className="text-orange-400" />
                <p className="text-lg font-bold sm:text-xl">{data.weight}</p>
              </div>
              <div className="divider"></div>
              <div className="ml-4 pl-4 border-l border-gray-300">
                <div className="flex items-center">
                  <p className="ml-2 text-sm text-gray-500">
                    order {data.order}
                  </p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="mt-6 flex items-center">
              <h2 className="text-xl font-bold text-orange-400">Base EXP :</h2>
              <p className="ml-2 text-xl font-bold ">{data.base_experience}</p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl font-bold mb-4">Stat</h1>

              {data.stats.map((stats) => (
                <div key={stats.stat.name}>
                  <div className="mb-1 text-base font-medium capitalize">
                    {stats.stat.name}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className={`bg-${stats.stat.name} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                      style={{ width: `${stats.base_stat}%` }}
                    >
                      {`${stats.base_stat}%`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>{" "}
        <div className="mt-3 lg:max-w-lg lg:col-start-2 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="divider"></div>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => catchPokemon()}
                  className="w-full btn btn-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Catch Pokemon
                </button>
              </div>
              <div className="mt-4">
                <Link href="/">
                  <a
                    type="submit"
                    className="w-full  btn py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Back Home
                  </a>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      <div className="flex items-center justify-center ">
        <Dialog
          as="div"
          className="fixed inset-0 flex flex-col items-center  justify-center "
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />

          <div className="bg-white p-8 w-96 rounded shadow-md z-10">
            <Dialog.Title className="font-bold text-2xl text-base-100 text-center">
              🥳 Yeay ....... <br />
              You get Pokemon !!!
            </Dialog.Title>
            <Dialog.Description className="text-center text-sm text-base-100 mt-2">
              Name Your Catch Pokemon
            </Dialog.Description>
            <div className="mt-7">
              <label className="block text-sm font-medium text-gray-700">
                Pokemon Nickame
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="shadow-sm py-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="nick pokemon"
                />
              </div>
            </div>
            <div className="mt-7 flex flex-col">
              <Link href="/mypokemon" passHref>
                <button className="btn " onClick={saveToLocalStorage}>
                  Catch Pokemon
                </button>
              </Link>
              <button
                className="btn btn-error btn-outline mt-3"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      </div>
      {/* Modal Catch */}

      {/* False Catch */}
      <div className="flex items-center justify-center">
        <Dialog
          as="div"
          className="fixed inset-0 flex flex-col items-center  justify-center "
          open={isFalseCatch}
          onClose={() => setIsFalseCatch(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />

          <div className="bg-white border-2 border-red-700 p-8 rounded shadow-md z-10">
            <Dialog.Title className="font-bold text-2xl text-base-100 text-center">
              🥺 Oooops.......!
            </Dialog.Title>
            <Dialog.Description className="text-center mt-2 text-red-400">
              You Failed to Catch a Pokemon
            </Dialog.Description>
            <div className="mt-7"></div>
            <div className="mt-7 flex flex-col">
              <button
                className="btn btn-error btn-outline mt-3"
                onClick={() => setIsFalseCatch(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </Layout>
  );
}

const GET_DETAIL_POKEMONS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      order
      base_experience
      status
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export async function getServerSideProps({ params }) {
  const name = params.slug;
  // console.log(name);
  const gqlVariables = {
    name: name,
  };
  const res = await request(
    "https://graphql-pokeapi.graphcdn.app/",
    GET_DETAIL_POKEMONS,
    gqlVariables
  );
  const data = res.pokemon;
  return {
    props: {
      data,
      name,
    },
  };
}
