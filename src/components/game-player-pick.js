import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

import './game-card.js';

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

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          grid-gap: 16px;
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
        <div class="cards">
          ${_cards.map(card => html`<game-card .card="${card}"></game-card>`)}
        </div>
      </div>
    `;
  }

  stateChanged({ game }) {
    this._cards = game.cards;
  }
}

window.customElements.define('game-player-pick', GamePlayerPick);
