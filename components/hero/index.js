/* eslint-disable @next/next/no-img-element */
/**
 *
 * @components Hero
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 *
 */
import Link from "next/link";
import React from "react";
import { CgPokemon } from "react-icons/cg";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b  overflow-hidden">
      <div className="space-y-16 container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-center space-y-16 md:space-y-0 md:space-x-16">
          <div className="relative">
            <div className="pattern-dots-xl text-white text-opacity-20 absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-10 -translate-y-10"></div>

            <img
              src="/bg.webp"
              alt="Pokemon"
              className="relative rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
                <Link href="/">
                  <a>
                    <img src="/pokeapi.svg" className="w-80" alt="logo" />
                  </a>
                </Link>
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400">
                Tokopedia: Software Engineer <br /> Web Platform [Technical
                Test]
              </h3>
              <small>Ahmad Aji Santoso</small>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2">
              <Link href="/mypokemon" passHref>
                <button className="btn btn-wide  md:btn-md lg:btn-lg">
                  <CgPokemon className="w-6 h-6 mr-2" />
                  MY Pokemon
                </button>
              </Link>
              <Link
                href="https://github.com/santoadji21/santoadji21-pokemon-graphql"
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-square"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      className="fill-cyan-600 hover:fill-cyan-400"
                      d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"
                    />
                    <path
                      className="fill-cyan-600 hover:fill-cyan-400"
                      d="M9.16085 35.1623C9.10809 35.2838 8.92085 35.3197 8.75027 35.2366 8.57652 35.1571 8.47893 34.9921 8.53526 34.8706 8.58683 34.746 8.77447 34.7117 8.94782 34.7944 9.12197 34.8743 9.22115 35.0409 9.16085 35.1623zM10.1312 36.263C10.0169 36.3707 9.79358 36.3207 9.64205 36.1504 9.48535 35.9806 9.456 35.7534 9.57183 35.6441 9.68965 35.5363 9.90624 35.5868 10.0633 35.7566 10.22 35.9285 10.2506 36.1541 10.1312 36.263zM11.0757 37.6662C10.929 37.7699 10.689 37.6726 10.5406 37.456 10.3938 37.2393 10.3938 36.9795 10.5438 36.8754 10.6925 36.7713 10.929 36.8649 11.0793 37.0799 11.2257 37.2998 11.2257 37.5601 11.0757 37.6662zM12.3696 39.0219C12.2383 39.1692 11.9587 39.1297 11.754 38.9287 11.5445 38.7322 11.4862 38.4534 11.6179 38.3062 11.7508 38.1585 12.0321 38.2001 12.2383 38.3994 12.4462 38.5955 12.5097 38.8763 12.3696 39.0219zM14.1548 39.8091C14.0969 40 13.8275 40.0867 13.5562 40.0056 13.2852 39.9221 13.1079 39.6986 13.1626 39.5057 13.219 39.3137 13.4895 39.2233 13.7628 39.31 14.0334 39.3932 14.2111 39.6151 14.1548 39.8091zM16.1152 39.9551C16.122 40.156 15.8919 40.3227 15.6071 40.3259 15.3207 40.3327 15.089 40.1701 15.0858 39.9724 15.0858 39.7695 15.3107 39.6045 15.5972 39.5996 15.882 39.594 16.1152 39.7554 16.1152 39.9551zM17.9397 39.6392C17.9738 39.8353 17.7759 40.0366 17.493 40.0899 17.2149 40.1419 16.9575 40.0209 16.9222 39.8264 16.8877 39.6255 17.0892 39.4241 17.3669 39.3721 17.6501 39.3221 17.9036 39.4399 17.9397 39.6392z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
