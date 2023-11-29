import "./styles.scss";

import SearchBar from "../SearchBar";
import Link from "../Link";
import { headerMainLinks, headerMenus } from "./mocks";

import Logo from "../../assets/logo-maeztra.png";
import MenuDrawer from "../../assets/icon-menu.svg";
import IconSearch from "../../assets/icon-busca.svg";
import IconBag from "../../assets/icon-shoppingbag.svg";

const HeaderDesktop = () => {
  return (
    <header>
      <section className="header__top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section className="header__main">
        <img
          className="header__logo"
          src={Logo}
          alt="Maeztra"
          width={147}
          height={18}
        />
        <SearchBar />
        <div className="header__links">
          {headerMainLinks.map((link) => {
            return <Link {...link} />;
          })}
        </div>
      </section>

      <section className="header__menu">
        <div className="header__menu-wrapper">
          {headerMenus.map((menu) => {
            return <Link {...menu} />;
          })}
        </div>
      </section>
    </header>
  );
};

const HeaderMobile = () => {
  return (
    <header>
      <section className="header__main">
        <button className="header__openDrawer">
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
      </section>
    </header>
  );
};

export { HeaderDesktop, HeaderMobile };
