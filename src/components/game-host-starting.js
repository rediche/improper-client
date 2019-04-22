import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class GameHostStarting extends connect(store)(LitElement) {
  static get properties() {
    return {
      _gameCode: { type: String }
    };
  }

  constructor() {
    super();
    this._gameCode = '';
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        .full-height {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        p {
          font-weight: 600;
        }

        .joined {
          margin-top: auto;
        }

        button {
          margin-top: auto;
          margin: auto auto 0;
          width: 500px;
          max-width: 100%;
        }

        @media screen and (min-width: 1024px) {
          h1, p {
            text-align: center;
          }
        }
      `
    ];
  }

  render() {
    const { _gameCode } = this;

    return html`
      <div class="full-height">
        <p>Game code</p>
        <h1>${_gameCode.toUpperCase()}</h1>
        <h1 class="joined">X players joined.</h1>
        <button>Start game</button>
      </div>
    `;
  }

  stateChanged({ game }) {
    this._gameCode = game.code;
  }
}

window.customElements.define('game-host-starting', GameHostStarting);