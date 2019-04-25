import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

import { GAME_STATES } from '../reducers/game.js';

import { socket } from '../socket.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class EndGame extends connect(store)(LitElement) {
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
        button {
          width: 100%;
        }
      `
    ];
  }

  render() {
    const { _endGame } = this;

    return html`
      <button @click="${_endGame}">End game</button>
    `;
  }

  _endGame() {
    const { _gameCode } = this;
    socket.emit('end-game', { gameCode: _gameCode });
  }

  stateChanged({ game }) {
    this._gameCode = game.code;
  }
}

window.customElements.define('end-game', EndGame);
