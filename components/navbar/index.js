/* eslint-disable jsx-a11y/alt-text */
/**
 * 
 * @components Navbar
 * @returns {JSX.Element}
 * @author Ahmad Aji Santoso
 * @email ahmad.aji.santoso21@gmail.com
 * @version 0.0.1
 * 
 */

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
}
