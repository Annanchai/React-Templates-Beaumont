import React from "react";
import "../Styles/NavBar.css";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

function NavBar(props) {
  return (
    <nav className="">
      <div>
        <p className="shipping text-center pt-2 pb-2">
          Free shipping on orders over $100 with free returns
        </p>
        <div className="d-flex justify-content-between align-items-center  mt-4 ms-3 me-4">
          <ul className="d-flex justify-content-around col-4">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
            <a href="/shop">
              <li>Shop</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
          </ul>
          <h1 className="col-4 text-center">BEAUMONT</h1>
          <div className="iconContainer col-4 text-end">
            <BsSearch className="icon" />
            <BiUser className="icon" />
            <BsCart2 className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;