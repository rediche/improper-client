import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GameOver extends connect(store)(LitElement) {
  static get properties() {
    return {
      _winner: { type: String }
    };
  }

  constructor() {
    super();
    this._winner = 'test';
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
    const { _winner } = this;

    return html`
      <div class="full-height">
        <h1>Player ${_winner} wins.</h1>
        <p>Game Over</p>
      </div>
    `;
  }

  stateChanged({ game }) {
    this._winner = game.winner;
  }
}

window.customElements.define('game-over', GameOver);