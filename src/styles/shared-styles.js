import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    line-height: 1.25;
  }

  h1 {
    font-size: 60px;
  }

  .full-height {
    min-height: 100vh;
  }
`;
