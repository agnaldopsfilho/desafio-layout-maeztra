import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Collapsible from "@vtex/styleguide/lib/Collapsible";
import useIsMobile from "../../hooks/device";

interface MenuItem {
  anchor: Anchor;
  label: string;
}

export interface FooterMenuProps {
  menus: Array<{
    title: string;
    items: MenuItem[];
  }>;
}

interface CollapsibleMenus {
  [key: number]: boolean;
}

const FooterMenu = ({ menus }: FooterMenuProps) => {
  const isMobile = useIsMobile();
  const [collapsibleMenus, setCollapsibleMenus] = useState<CollapsibleMenus>(
    {}
  );

  const initalCollapsibleMenus = useRef<CollapsibleMenus>({});

  useEffect(() => {
    setCollapsibleMenus(initalCollapsibleMenus.current);
  }, []);

  return (
    <section className="footer-menu">
      <div className="footer-menu__wrapper">
        {menus.map(({ title, items }, index) => {
          initalCollapsibleMenus.current = {
            ...initalCollapsibleMenus.current,
            [index]: false,
          };

          return (
            <Collapsible
              header={<span>{title}</span>}
              isOpen={isMobile ? collapsibleMenus[index] : true}
              onClick={() =>
                setCollapsibleMenus({
                  ...collapsibleMenus,
                  [index]: !collapsibleMenus[index],
                })
              }
              align="right"
              arrowAlign="center"
              key={index}
            >
              {items.map(({ anchor, label }, index) => {
                return (
                  <a {...anchor} key={index}>
                    {label}
                  </a>
                );
              })}
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
};

export default FooterMenu;
