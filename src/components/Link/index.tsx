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
      className={`menu-item__wrapper ${
        highlight ? "menu-item__wrapper--highlight" : ""
      }`}
    >
      <img {...icon} alt={icon?.alt} />
      <a {...anchor}>{label}</a>
    </div>
  );
};

export default Link;
