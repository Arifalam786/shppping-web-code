import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


export default function Header() {
  return (
  <div className="head">
    <div className="header">
      <div className="head1">
        <p className="head1a"><FaHeart /> <span className="shop">E-</span>Shop </p>
      </div>
      <div className="head2">
        <p className="head2a">Men</p>
        <p className="head2a">Women</p>
        <p className="head2a">Kids</p>
      </div>
      <div className="head3">
        <div className="head3a">
          <FaSearch />
        </div>
        <div className="head3a">
          <FaShoppingCart />
        </div>
        <div className="head3a">
          <FaUserAlt />
        </div>
      </div>
    </div>
    </div>
    
  );
}
