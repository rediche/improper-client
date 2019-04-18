import { html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from '../components/page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { InputSharedStyles } from '../styles/input-shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class PageGame extends connect(store)(PageViewElement) {
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
      InputSharedStyles,
      ButtonSharedStyles,
      css` 
      `
    ];
  }

  render() {
    return html`
      GAME
    `;
  }

  stateChanged({ game }) {
    this._gameCode = game;
  }
}

window.customElements.define('page-game', PageGame);
