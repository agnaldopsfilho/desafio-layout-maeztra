import "./styles.scss";
import FooterMenu from "../FooterMenu";
import Newsletter from "../Newsletter";
import {
  copyrightStamps,
  footerMenus,
  paymentStamps,
  socialNetworkStamps,
} from "./mocks";
import type { Stamp } from "./mocks";

const Footer = () => {
  const StampElement = ({ anchor, image }: Stamp) => {
    return anchor ? (
      <a {...anchor}>
        <img {...image} alt={image.alt} />
      </a>
    ) : (
      <img {...image} alt={image.alt} />
    );
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <Newsletter />

        <FooterMenu menus={footerMenus} />

        <section className="footer__bottom">
          <div className="footer__bottom-wrapper">
            <div className="footer__social-networks">
              {socialNetworkStamps.map(({ anchor, image }, index) => {
                return (
                  <StampElement anchor={anchor} image={image} key={index} />
                );
              })}
            </div>

            <div className="footer__payments">
              {paymentStamps.map(({ anchor, image }, index) => {
                return (
                  <StampElement anchor={anchor} image={image} key={index} />
                );
              })}
            </div>

            <div className="footer__copyright">
              {copyrightStamps.map(({ anchor, image }, index) => {
                return (
                  <StampElement anchor={anchor} image={image} key={index} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
