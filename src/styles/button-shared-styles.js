import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  button {
    font-size: 20px;
    font-weight: 600;
    vertical-align: middle;
    background: transparent;
    border: none;
    cursor: pointer;
    background-color: #000000;
    color: #ffffff;
    border-radius: 4px;
    height: 64px;
    padding: 0 24px;
  }

  button.transparent {
    background-color: transparent;
    color: #000000;
  }
`;
