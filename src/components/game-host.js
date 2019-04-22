import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

import { GAME_STATES } from '../reducers/game.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

import './game-host-starting.js';
import './game-over.js';

class GameHost extends connect(store)(LitElement) {
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
      case GAME_STATES.CHOOSE_WINNER:
        return html`Show black card. Start showing blank white cards for each answer. When state changes to choose_winner, then show text on cards. Highlight the winning card for x seconds.`;
      default:
        return html`<game-host-starting></game-host-starting>`;
    }
  }

  stateChanged({ game }) {
    this._gameState = game.state;
  }
}

window.customElements.define('game-host', GameHost);
