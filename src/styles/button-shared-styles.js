import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  button, a.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    vertical-align: middle;
    background: transparent;
    border: none;
    background-color: #000000;
    color: #ffffff;
    border-radius: 4px;
    height: 64px;
    padding: 0 24px;
    opacity: 0.8;
  }

  button:not([disabled]) {
    cursor: pointer;
    opacity: 1;
  }

  button.transparent {
    background-color: transparent;
    color: #000000;
  }
`;
