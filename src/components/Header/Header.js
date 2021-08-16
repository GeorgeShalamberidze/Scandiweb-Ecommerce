import React, { createRef } from "react";
import styles from "./header.module.css";
import brandLogo from "../../static/images/a-logo.png";
import asd from "../../static/images/Product.png";
import { NavLink } from "react-router-dom";
import { navData, currencyData } from "./navData";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyBar: false,
      cartBar: false,
      small: true,
      medium: false,
    };
    this.wrapperRef = createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.toggleCurrencyBar = this.toggleCurrencyBar.bind(this);
    this.toggleCartBar = this.toggleCartBar.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleMedium = this.toggleMedium.bind(this);
  }
  ////////////////////////

  ////////////////////////

  toggleCurrencyBar() {
    this.setState({
      currencyBar: !this.state.currencyBar,
      cartBar: false,
    });
  }
  toggleCartBar() {
    this.setState({
      cartBar: !this.state.cartBar,
      currencyBar: false,
    });
  }

  toggleSmall() {
    this.setState({
      small: true,
      medium: false,
    });
  }

  toggleMedium() {
    this.setState({
      small: false,
      medium: true,
    });
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.sections}>
          <ul>
            {navData.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.route}
                    className={styles.asd}
                    activeClassName={styles.activeLink}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.brandLogo}>
          <NavLink to="/women">
            <img src={brandLogo} alt="brand logo" />
          </NavLink>
        </div>

        <div className={styles.cart} onClick={this.handleClickOutside}>
          <div
            ref={this.wrapperRef}
            className={
              !this.state.currencyBar
                ? `${styles.currency__toggle} ${styles.currency__active}`
                : styles.currency__toggle
            }
          >
            {currencyData.map((item) => {
              return (
                <div key={item.id} onClick={this.toggleCurrencyBar}>
                  <span>{item.symbol}</span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div onClick={this.toggleCurrencyBar} className={styles.cart__left}>
            <span>$</span>
            <span>
              {!this.state.currencyBar ? (
                <IoIosArrowDown size={10} />
              ) : (
                <IoIosArrowUp size={10} />
              )}
            </span>
          </div>

          <div className={styles.cart__right}>
            <FiShoppingCart onClick={this.toggleCartBar} />
          </div>

          <div
            className={
              this.state.cartBar
                ? styles.cart__bar
                : `${styles.cart__bar} ${styles.cart__bart__active}`
            }
          >
            <div className={styles.cart__bar__container}>
              <p className={styles.bag__items}>
                <b>My Bag</b>, 2 items
              </p>
              <div className={styles.cart__item}>
                <div className={styles.left__description}>
                  <div className={styles.brand__plus}>
                    <div className={styles.desc__wrapper}>
                      <p>Apollo</p>
                      <p>Running Short</p>
                    </div>
                    <div className={styles.plusSquare}>
                      <BsPlusSquare size={30} />
                    </div>
                  </div>

                  <div className={styles.price__quantity}>
                    <b>$50.00</b>
                    <p>1</p>
                  </div>

                  <div className={styles.size__minus}>
                    <div className={styles.sizing}>
                      <span
                        onClick={this.toggleSmall}
                        className={this.state.small ? `${styles.small}` : null}
                      >
                        S
                      </span>
                      <span
                        onClick={this.toggleMedium}
                        className={this.state.medium ? `${styles.small}` : null}
                      >
                        M
                      </span>
                    </div>
                    <AiOutlineMinusSquare size={35} />
                  </div>
                </div>
                <div className={styles.product__image}>
                  <img src={asd} alt="product" />
                </div>
              </div>
              <div className={styles.total__value}>
                <p>Total</p>
                <p>$100.00</p>
              </div>
              <div className={styles.button__container}>
                <button className={styles.view__bag}>VIEW BAG</button>
                <button className={styles.check__out}>CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
