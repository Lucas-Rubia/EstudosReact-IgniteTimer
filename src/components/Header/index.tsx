import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import LogoIgnite from "../../assets/LogoIgnite.svg";
import { HeaderConteiner } from "./styles";

export function Header() {
  return (
    <HeaderConteiner>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>

        
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  );
}
