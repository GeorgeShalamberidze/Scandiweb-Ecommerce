import React, { createRef } from "react";
import styles from "./header.module.css";
import brandLogo from "../../static/images/a-logo.png";
import asd from "../../static/images/Product.png";
import { NavLink } from "react-router-dom";
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
      backgroundBlur: false,
    };
    this.barRef = createRef();
    this.cartRef = createRef();

    this.handleCartClick = this.handleCartClick.bind(this);

    this.toggleCurrencyBar = this.toggleCurrencyBar.bind(this);
    this.toggleCartBar = this.toggleCartBar.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleMedium = this.toggleMedium.bind(this);
  }

  handleCartClick(e) {
    if (this.cartRef && !this.cartRef.current.contains(e.target)) {
      this.setState({
        cartBar: false,
        backgroundBlur: false,
      });
    }
    if (this.barRef && !this.barRef.current.contains(e.target)) {
      this.setState({
        currencyBar: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleCartClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleCartClick);
  }

  toggleCurrencyBar() {
    this.setState({
      currencyBar: !this.state.currencyBar,
      cartBar: false,
      backgroundBlur: false,
    });
  }
  toggleCartBar() {
    this.setState({
      cartBar: !this.state.cartBar,
      backgroundBlur: !this.state.backgroundBlur,
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
    const currencyData = this.props.currency;
    const currencySymbol = ["$", "??", "A$", "??", "???"];

    const currencyDataWithSymbols = currencyData.map((x, i) => {
      return {
        name: x,
        symbol: currencySymbol[i],
      };
    });

    return (
      <div className={styles.headerContainer}>
        <div className={styles.sections}>
          <div
            className={
              this.state.backgroundBlur ? styles.background__blur : null
            }
          ></div>
          <ul>
            {this.props.category.map((item, id) => {
              return (
                <li key={id}>
                  <NavLink
                    to={`/${item.name}`}
                    className={styles.category__navigation}
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
          <NavLink to="/clothes">
            <img src={brandLogo} alt="brand logo" />
          </NavLink>
        </div>

        <div
          className={styles.cart}
          ref={this.cartRef}
          onClick={this.clickDOWN}
        >
          <div
            ref={this.barRef}
            className={
              !this.state.currencyBar
                ? `${styles.currency__toggle} ${styles.currency__active}`
                : styles.currency__toggle
            }
          >
            {currencyDataWithSymbols.map((item, id) => {
              return (
                <div key={id} onClick={this.toggleCurrencyBar}>
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
