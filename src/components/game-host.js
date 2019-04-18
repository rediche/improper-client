import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GameHost extends connect(store)(LitElement) {
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
    return html`<h1>HOST</h1>`;
  }

  stateChanged({ game }) {}
}

window.customElements.define('game-host', GameHost);
