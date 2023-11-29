import { useEffect, useState } from "react";
import "./styles.scss";
import SearchBar from "../SearchBar";
import Link from "../Link";
import { headerMainLinks, headerMenus } from "./mocks";

import Logo from "../../assets/logo-maeztra.png";
import MenuDrawer from "../../assets/icon-menu.svg";
import IconSearch from "../../assets/icon-busca.svg";
import IconBag from "../../assets/icon-shoppingbag.svg";

const HeaderDesktop = () => {
  const [offScroll, setOffScroll] = useState(0);

  useEffect(() => {
    const onScrool = () => setOffScroll(window.scrollY);

    window.removeEventListener("scroll", onScrool);
    window.addEventListener("scroll", onScrool, { passive: true });

    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  return (
    <header>
      <section className="header__top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section
        className="header__main"
        style={{
          ...(offScroll > 0 && {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }),
        }}
      >
        <div className="header__main-wrapper">
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={147}
            height={18}
          />

          <SearchBar />

          <ul className="header__links">
            {headerMainLinks.map((link, index) => {
              return (
                <li className="header__menu-item">
                  <Link {...link} key={index} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="header__menu">
        <ul className="header__menu-wrapper">
          {headerMenus.map((menu, index) => {
            return (
              <li className="header__menu-item">
                <Link {...menu} key={index} />
              </li>
            );
          })}
        </ul>
      </section>
    </header>
  );
};

const HeaderMobile = () => {
  const [offScroll, setOffScroll] = useState(0);

  useEffect(() => {
    const onScrool = () => setOffScroll(window.scrollY);

    window.removeEventListener("scroll", onScrool);
    window.addEventListener("scroll", onScrool, { passive: true });

    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  return (
    <header>
      <section className="header__top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section
        className="header__main"
        style={{
          ...(offScroll > 0 && {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }),
        }}
      >
        <div className="header__main-wrapper">
          <button className="header__open-drawer">
            <img src={MenuDrawer} alt="Abrir Menu" width={24} height={24} />
          </button>
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={110}
            height={12}
          />
          <div className="header__right-icons">
            <button>
              <img src={IconSearch} alt="Busca" width={24} height={24} />
            </button>

            <button>
              <img src={IconBag} alt="Sacola" width={21} height={24} />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export { HeaderDesktop, HeaderMobile };
