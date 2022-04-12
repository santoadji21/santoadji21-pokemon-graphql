/**
 *
 * @components Page Index
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 *
 */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "/components/card";
import { gql } from "@apollo/client";
import { request } from "graphql-request";
import { useRouter } from "next/router";

import Hero from "../components/hero";
import Footer from "../components/footer/index.js";
import Layout from "../components/Layout.js";

export default function HomePage({ data }) {
  const [numlimit, setNumLimit] = React.useState(20);

  const router = useRouter();
  const pageNumClick = (e) => {
    e.preventDefault();
    setNumLimit((numlimit += 5));
    router.push({
      pathname: router.pathname,
      query: { limit: numlimit },
    });
  };

  return (
    <Layout>
      <Hero />
      <div className="container max-w-6xl mx-auto mt-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-4  gap-4">
          {data.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.dreamworld}
              url={pokemon.url}
            />
          ))}
        </div>
        <div className="flex justify-center mt-20 items-center">
          <div className="btn btn-wide" onClick={pageNumClick}>
            Get More Pokemon
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        dreamworld
      }
    }
  }
`;

export async function getServerSideProps(query) {
  const { limit, offset } = query;
  // console.log(query.query.limit);

  // const gqlVariables = {
  //   limit: 24,
  // };

  const res = await request(
    "https://graphql-pokeapi.graphcdn.app/",
    GET_POKEMONS,
    {
      limit: parseInt(query.query.limit) || 20,
      offset: 0,
    }
  );
  const data = res.pokemons.results;

  return {
    props: {
      data,
    },
  };
}
