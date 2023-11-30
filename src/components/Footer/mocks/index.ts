import type { FooterMenuProps } from "../../FooterMenu";

import Facebook from "../../../assets/facebook.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Instagram from "../../../assets/instagram.svg";
import YouTube from "../../../assets/youtube.svg";
import Visa from "../../../assets/visa.svg";
import Mastercard from "../../../assets/mastercard.svg";
import PoweredBy from "../../../assets/powered-by.png";
import DevelopedBy from "../../../assets/developed-by.png";

export interface Stamp {
  anchor?: Anchor;
  image: Image;
}

export const footerMenus: FooterMenuProps["menus"] = [
  {
    title: "Informações",
    items: [
      {
        anchor: { href: "/" },
        label: "Quem Somos",
      },
      {
        anchor: { href: "/" },
        label: "Prazo de Envio",
      },
      {
        anchor: { href: "/" },
        label: "Trocas e Devoluções",
      },
      {
        anchor: { href: "/" },
        label: "Promoções e Cupons",
      },
    ],
  },
  {
    title: "Minha Conta",
    items: [
      {
        anchor: { href: "/" },
        label: "Minha Conta",
      },
      {
        anchor: { href: "/" },
        label: "Meus Pedidos",
      },
      {
        anchor: { href: "/" },
        label: "Cadastre-se",
      },
    ],
  },
  {
    title: "Onde nos Encontrar",
    items: [
      {
        anchor: { href: "/" },
        label: "Lojas",
      },
      {
        anchor: { href: "/" },
        label: "Endereço",
      },
    ],
  },
];

export const socialNetworkStamps: Stamp[] = [
  {
    anchor: { href: "/" },
    image: {
      src: Facebook,
      alt: "Facebook",
      width: 32,
      height: 32,
      loading: "lazy",
    },
  },
  {
    anchor: { href: "/" },
    image: {
      src: LinkedIn,
      alt: "LinkedIn",
      width: 32,
      height: 32,
      loading: "lazy",
    },
  },
  {
    anchor: { href: "/" },
    image: {
      src: Instagram,
      alt: "Instagram",
      width: 32,
      height: 32,
      loading: "lazy",
    },
  },
  {
    anchor: { href: "/" },
    image: {
      src: YouTube,
      alt: "YouTube",
      width: 32,
      height: 22,
      loading: "lazy",
    },
  },
];

export const paymentStamps: Stamp[] = [
  {
    image: {
      src: Visa,
      alt: "Visa",
      width: 32,
      height: 25,
      loading: "lazy",
    },
  },
  {
    image: {
      src: Mastercard,
      alt: "Mastercard",
      width: 32,
      height: 25,
      loading: "lazy",
    },
  },
  {
    image: {
      src: Visa,
      alt: "Visa",
      width: 32,
      height: 25,
      loading: "lazy",
    },
  },
  {
    image: {
      src: Mastercard,
      alt: "Mastercard",
      width: 32,
      height: 25,
      loading: "lazy",
    },
  },
];

export const copyrightStamps: Stamp[] = [
  {
    image: {
      src: PoweredBy,
      alt: "Powerd by VTEX",
      width: 68,
      height: 46,
      loading: "lazy",
    },
  },
  {
    image: {
      src: DevelopedBy,
      alt: "Developed by Maeztra",
      width: 120,
      height: 49,
      loading: "lazy",
    },
  },
];
