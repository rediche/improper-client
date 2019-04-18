import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GamePlayerStarting extends connect(store)(LitElement) {
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
      css`
        .full-height {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        p {
          margin-top: auto;
          font-weight: 600;
        }

        @media screen and (min-width: 1024px) {
          h1 {
            margin-top: auto;
          }

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
        <h1>Waiting for game to start.</h1>
        <p>Connected to game ${_gameCode.toUpperCase()}</p>
      </div>
    `;
  }

  stateChanged({ game }) {
    this._gameCode = game.code;
  }
}

window.customElements.define('game-player-starting', GamePlayerStarting);
