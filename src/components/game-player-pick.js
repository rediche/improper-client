import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GamePlayerPick extends connect(store)(LitElement) {
  static get properties() {
    return {
      _cards: { type: Array }
    };
  }

  constructor() {
    super();
    this._cards = [];
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
      `
    ];
  }

  // TODO: Add card component.
  render() {
    const { _cards } = this;

    return html`
      <div class="full-height">
        <h1>Pick a card to play.</h1>
        ${_cards.map(card => html`<div>${card.id} - ${card.text}</div>`)}
      </div>
    `;
  }

  stateChanged({ game }) {
    this._cards = game.cards;
  }
}

window.customElements.define('game-player-pick', GamePlayerPick);
