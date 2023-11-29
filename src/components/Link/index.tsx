export interface LinkProps {
  icon?: React.ImgHTMLAttributes<HTMLImageElement>;
  border?: React.CSSProperties["border"];
  anchor: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  label: string;
  highlight?: boolean;
}
const Link = ({ icon, border, anchor, label, highlight }: LinkProps) => {
  return (
    <div
      style={{ border }}
      className={`header__menu-item ${
        highlight ? "header__menu-item--highlight" : ""
      }`}
    >
      <img {...icon} alt={icon?.alt} />
      <a {...anchor}>{label}</a>
    </div>
  );
};

export default Link;
