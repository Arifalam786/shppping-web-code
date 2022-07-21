import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";

export default function Content(props) {
  return (
    <div className="cont">
      <div className="log">
        <div>
          <button className="but" id="log">
            LOG IN
          </button>
          <button className="but">SIGN UP</button>
        </div>
        <div className="ship-info">
          <p>Shipping information</p>
        </div>
        <div className="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Address"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="City"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Postal/Zip"
            className="inp-item"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone Number"
            className="inp-item"
          />
          
          <select name="" id="country" className="inp-item" >
            <option >Poland</option>
            <option>India</option>
            <option>China</option>
            <option>Canada</option>
          </select>
        </div>
      </div>
      <div className="payment">
        <p className="pay-method">Payment Method</p>
        <div className="pay-item">
          <button className="pay">
            <img src={props.paypal} alt="" className="payment-icon" />
          </button>
          <button className="pay">
            <img src={props.visa} alt="" className="payment-icon" />
          </button>
          <button className="pay">
            <img src={props.master} alt="" className="payment-icon" />
          </button>
          <button className="pay">
            <img src={props.discover} alt="" className="payment-icon" />
          </button>
          <button className="pay">
            <img src={props.google} alt="" className="payment-icon" />
          </button>
          <button className="pay">
            <img src={props.phone} alt="" className="payment-icon" id="phone" />
          </button>
        </div>
        <p className="pay-method">Delivery Method</p>
        <div className="pay-meth">
          <div className="meth">
            <div className="metha">
              <img
                src={props.inpost}
                alt=""
                className="payment-icon"
                id="phone"
              />{" "}
              $769
            </div>
          </div>
          <div className="meth">
            <div className="metha">
              <img
                src={props.blue}
                alt=""
                className="payment-icon"
                id="phone"
              />{" "}
              $369
            </div>
          </div>
          <div className="meth">
            <div className="metha">
              <img
                src={props.delhi}
                alt=""
                className="payment-icon"
                id="delhi"
              />{" "}
              $669
            </div>
          </div>
          <div className="meth">
            <div className="metha">
              <img src={props.fed} alt="" className="payment-icon" id="phone" />{" "}
              $269
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        <div>
          <p className="pay-method">Your cart</p>
        </div>
        <div className="prod">
          <div className="prod-item">
            <div>
              <img src={props.image} alt="" className="pimg" />
            </div>
            <div className="pimg-cont">
              <h3 className="pimg-cont-a">T-shirt</h3>
              <h3 className="pimg-cont-a">Summer Vibes</h3>
              <p className="pimg-cont-a">#978897</p>
            </div>
            <div className="pprice">$49.9</div>
          </div>
          <div className="prod-item">
            <div>
              <img src={props.image} alt="" className="pimg" />
            </div>
            <div className="pimg-cont">
              <h3 className="pimg-cont-a">Shirt</h3>
              <h3 className="pimg-cont-a">Summer Vibes</h3>
              <p className="pimg-cont-a">#534553</p>
            </div>
            <div className="pprice">
              <p>$57.9</p>
            </div>
          </div>
        </div>
        <div className="price">
          <p className="pricea">
            Total cost <span>$99.99</span>
          </p>
        </div>
        <div className="total-price">
          <div className="info">
            <FaPaypal />
          </div>

          <div className="info-item">
            <p>
              You are <span>$798</span> away <br></br>from free delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
