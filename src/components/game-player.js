import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

import { GAME_STATES } from '../reducers/game.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

import './game-player-starting.js';
import './game-player-pick.js';
import './game-player-winner.js';
import './game-over.js';

class GamePlayer extends connect(store)(LitElement) {
  static get properties() {
    return {
      _gameState: { type: String }
    };
  }

  constructor() {
    super();
    this._gameState = '';
  }

  static get styles() {
    return [
      SharedStyles,
      css``
    ];
  }

  render() {
    const { _gameState } = this;

    switch (_gameState) {
      case GAME_STATES.GAME_OVER:
        return html`<game-over></game-over>`;
      case GAME_STATES.PICKING_CARDS:
        return html`<game-player-pick></game-player-pick>`;
      case GAME_STATES.CHOOSE_WINNER:
        return html`<game-player-winner></game-player-winner>`;
      default:
        return html`<game-player-starting></game-player-starting>`;
    }
  }

  stateChanged({ game }) {
    this._gameState = game.state;
  }
}

window.customElements.define('game-player', GamePlayer);
