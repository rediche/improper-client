import { html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from '../components/page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

import { PLAYER_TYPES } from '../reducers/game.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { InputSharedStyles } from '../styles/input-shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

import '../components/game-host.js';
import '../components/game-player.js';

class PageGame extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      _playerType: { type: String }
    };
  }

  constructor() {
    super();
    this._gameCode = '';
    this._playerType = '';
  }

  static get styles() {
    return [
      SharedStyles,
      InputSharedStyles,
      ButtonSharedStyles,
      css``
    ];
  }

  render() {
    switch (this._playerType) {
      case PLAYER_TYPES.HOST:
        return html`<game-host></game-host>`;
      default:
        return html`<game-player></game-player>`;
    }
  }

  stateChanged({ game }) {
    this._playerType = game.playerType;
  }
}

window.customElements.define('page-game', PageGame);
