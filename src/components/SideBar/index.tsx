import React from "react";
import MenuItem from "./MenuItem";

import { Container, SideBarArea, MenuList, Credits } from "./styles";

const menuItems = [
  { id: 1, link: "/", icon: "Home", title: "Início", tooltip: "" },
  {
    id: 2,
    link: "/new-tag",
    icon: "Portrait",
    title: "Novo Crachá sdfsdfsdfsdfsdfsdfs",
    tooltip: "Ir para Novo Crachá",
  },
  {
    id: 3,
    link: "/message",
    icon: "Envelope",
    title: "Mensagens",
    tooltip: "Ir para Mensagens",
  },
  {
    id: 4,
    link: "/search",
    icon: "Search",
    title: "Pesquisar",
    tooltip: "Ir para Pesquisar",
  },
  {
    id: 5,
    link: "/new-user",
    icon: "UserFriends",
    title: "Novo Usuário",
    tooltip: "Ir para criação de Novo Usuário",
  },
];

export interface Props {
  idSelectedMenuItem: number;
}

const SideBar: React.FC<Props> = ({ idSelectedMenuItem }) => {
  return (
    <Container>
      <SideBarArea>
        <MenuList>
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              link={menuItem.link}
              icon={menuItem.icon}
              title={menuItem.title}
              tooltip={menuItem.tooltip}
              isActive={idSelectedMenuItem === menuItem.id}
            />
          ))}
        </MenuList>

        <Credits>
          <p>
            Licenciado para <b>SUPERMERCADOS DB LTDA</b>
          </p>
          <p>
            Desenvolvido por <span>Frank Matos</span>
          </p>
        </Credits>
      </SideBarArea>
    </Container>
  );
};

export default SideBar;
