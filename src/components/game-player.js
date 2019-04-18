import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GamePlayer extends connect(store)(LitElement) {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      SharedStyles,
      css``
    ];
  }

  render() {
    return html`PLAYER`;
  }

  stateChanged({ game }) {
    /* this._gameCode = game.gameCode;
    this._playerType = game.playerType; */
  }
}

window.customElements.define('game-player', GamePlayer);
