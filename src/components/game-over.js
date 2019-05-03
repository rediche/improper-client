import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

import { restartGame } from '../actions/game.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class GameOver extends connect(store)(LitElement) {
  static get properties() {
    return {
      _id: { type: String },
      _wins: { type: Number }
    };
  }

  constructor() {
    super();
    this._id = null;
    this._wins = null;
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
          margin-bottom: auto;
          font-weight: 600;
        }

        button {
          align-self: center;
          padding: 0 32px;
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
    const { _id, _wins, _restartGame } = this;

    return html`
      <div class="full-height">
        <h1>Player ${_id} wins with ${_wins} points.</h1>
        <p>Game Over</p>
        <button @click="${_restartGame}">Start or join a new game</button>
      </div>
    `;
  }

  _restartGame() {
    store.dispatch(restartGame());
  }

  stateChanged({ game }) {
    this._id = game.winner.id;
    this._wins = game.winner.wins;
  }
}

window.customElements.define('game-over', GameOver);
