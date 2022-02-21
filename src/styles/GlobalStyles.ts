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

  .DontShowIt {
    display: none;
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
  --THEME_COLOR_007: #EFF0F2;
  --THEME_COLOR_008: #FFFFFF;
  --THEME_COLOR_009: #FE7271;
  --THEME_COLOR_010: #FC9797;
  --THEME_COLOR_011: #F9A5A5;
  --THEME_COLOR_012: #FFC9C9;
  --THEME_COLOR_013: #FFDDDC;
  --THEME_COLOR_014: #FFFFFF;
  --THEME_COLOR_015: #FFFFFF;
  --THEME_COLOR_016: #3752B4;
  --THEME_COLOR_017: #ba7f5b;
  --THEME_COLOR_018: #CCF6E4;

  --default-transition-delay: 0.7s;
  --default-scroll: var(--THEME_COLOR_003);
  --default-background-scroll-hover: var(--THEME_COLOR_001);
  --default-background-scroll: var(--THEME_COLOR_006);

  --principal: var(--THEME_COLOR_001);
  --white: var(--THEME_COLOR_008);
  
  --logo-first-color: var(--THEME_COLOR_001);
  --logo-second-color: var(--THEME_COLOR_003);

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

  --default-tooltip-text: var(--THEME_COLOR_003);
  --default-tooltip-background: var(--THEME_COLOR_006);

  --default-card-text: var(--THEME_COLOR_001);
  --default-card-background: var(--THEME_COLOR_007);

  --mark-selecteds-background: var(--THEME_COLOR_008);

  --mark-all-text: var(--THEME_COLOR_003);
  --mark-all-background: var(--THEME_COLOR_008);
  --mark-all-border: var(--THEME_COLOR_003);

  --mark-waiting-text: var(--THEME_COLOR_016);
  --mark-waiting-background: var(--THEME_COLOR_004);
  --mark-waiting-border: var(--THEME_COLOR_016);

  --mark-pending-text: var(--THEME_COLOR_017);
  --mark-pending-background: var(--THEME_COLOR_002);
  --mark-pending-border: var(--THEME_COLOR_017);

  --mark-canceled-text: var(--THEME_COLOR_003);
  --mark-canceled-background: var(--THEME_COLOR_006);
  --mark-canceled-border: var(--THEME_COLOR_003);

  --mark-success-text: var(--THEME_COLOR_001);
  --mark-success-background: var(--THEME_COLOR_018);
  --mark-success-border: var(--THEME_COLOR_001);

  --table-head-title: var(--THEME_COLOR_001);
  --table-body-text: var(--THEME_COLOR_003);
  --table-body-background: var(--THEME_COLOR_007);
  --table-actions-button-color: var(--THEME_COLOR_003);
  --table-actions-button-color-hover: var(--THEME_COLOR_001);
  --table-paginations-button: var(--THEME_COLOR_003);
  --table-paginations-button-hover: var(--THEME_COLOR_001);
  --table-schedule-background: var(--THEME_COLOR_006);
  --table-schedule-title: var(--THEME_COLOR_001);
  --table-schedule-title-description: var(--THEME_COLOR_003);
  --table-schedule-title-description-value: var(--THEME_COLOR_010);
  --table-schedule-backgroung-button: var(--THEME_COLOR_003);
  --table-schedule-text-button: var(--THEME_COLOR_008);
  --table-do-tag-backgroung-button: var(--THEME_COLOR_001);
  --table-do-tag-text-button: var(--THEME_COLOR_008);
  --table-close-backgroung-button: var(--THEME_COLOR_010);
  --table-close-text-button: var(--THEME_COLOR_008);

  --create-tags-border: var(--THEME_COLOR_004);
  --create-tags-input-border: var(--THEME_COLOR_004);
  --create-tags-form-text: var(--THEME_COLOR_003);
  --create-tags-form-data-tag-background: var(--THEME_COLOR_007);
  --create-tags-form-front-tag-background: var(--THEME_COLOR_007);
  --create-tags-form-back-tag-background: var(--THEME_COLOR_007);
  --create-tags-form-front-tag-border: var(--THEME_COLOR_004);
  --create-tags-form-back-tag-border: var(--THEME_COLOR_004);
  --create-tags-form-front-tag-color: var(--THEME_COLOR_003);
  --create-tags-form-back-tag-color: var(--THEME_COLOR_003);
}
`;
