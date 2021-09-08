import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: var(--background);
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

:root {
  --THEME_COLOR_001: #06A78D;
  --THEME_COLOR_002: #FDE6D8;
  --THEME_COLOR_003: #7D899B;
  --THEME_COLOR_004: #C6CEEA;
  --THEME_COLOR_005: #F2F8F2;
  --THEME_COLOR_006: #E3E6EA;
  --THEME_COLOR_007: #F7F8FA;
  --THEME_COLOR_008: #FFFFFF;
  --THEME_COLOR_009: #FE7271;
  --THEME_COLOR_010: #FC9797;
  --THEME_COLOR_011: #F9A5A5;
  --THEME_COLOR_012: #FFC9C9;
  --THEME_COLOR_013: #FFDDDC;
  --THEME_COLOR_014: #FFFFFF;
  --THEME_COLOR_015: #FFFFFF;

  --default-transition-delay: 0.7s;

  --principal: var(--THEME_COLOR_001);
  --white: var(--THEME_COLOR_008);

  --background: var(--THEME_COLOR_007);
  --background-sections: var(--THEME_COLOR_008);

  --default-title: var(--THEME_COLOR_001);
  --default-text: var(--THEME_COLOR_003);

  --default-input-label: var(--THEME_COLOR_003);
  --default-input-placeholder: var(--THEME_COLOR_006);
  --default-input-text: var(--THEME_COLOR_003);

  --default-menu-icon: var(--THEME_COLOR_003);
  --default-menu-hover-icon: var(--THEME_COLOR_001);
  --default-menu-text: var(--THEME_COLOR_003);
  --default-menu-hover-text: var(--THEME_COLOR_003);
  --default-menu-hover-background: var(--THEME_COLOR_006);
  --default-menu-active-text: var(--THEME_COLOR_008);
  --default-menu-active-background: var(--THEME_COLOR_001);


  --default-credits-text: var(--THEME_COLOR_003);

}
`;
