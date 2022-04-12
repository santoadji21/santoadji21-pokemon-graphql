/**
 * @components Card
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 *
 */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Card({ name, image, url }) {
  return (
    <div className="card border-2 border-slate-600 border-opacity-50 w-auto shadow-xl">
      <figure className="px-5 pt-5">
        <img className="w-24 h-24" src={image} alt={name} />
      </figure>
      <div className="card-body items-center text-center pt-2">
        <h2 className="card-title text-base capitalize">{name}</h2>
      </div>
      <div className="pl-4 pr-4 pb-4">
        <Link href={`/detail/${name}`}>
          <button className="btn w-full">Detail</button>
        </Link>
      </div>
    </div>
  );
}
