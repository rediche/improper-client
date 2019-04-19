import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';

// This element is connected to the Redux store.
import { store } from "../store.js";

// Load up socket.io
import { socket } from '../socket.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

import './game-card.js';

class GamePlayerPick extends connect(store)(LitElement) {
  static get properties() {
    return {
      _cards: { type: Array },
      _selectedCard: { type: Number }
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
          max-width: 1592px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          margin-bottom: 24px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));
          grid-gap: 16px;
        }

        .selected-card {
          width: 375px;
          max-width: 100%;
          margin: auto;
        }

        @media screen and (max-width: 1024px) {
          h1 {
            font-size: 20px;
          }
        }
      `
    ];
  }

  render() {
    const { _selectedCard } = this;

    return html`
      <div class="full-height">
        ${ _selectedCard ? this._renderSelectedCard() : this._renderCardList() }
      </div>
    `;
  }

  _renderSelectedCard() {
    const { _selectedCard, _cards } = this;

    return html`
      <h1>Waiting for everyone to pick.</h1>
      <div class="selected-card">
        <game-card .card="${_cards.find(card => card.id === _selectedCard)}"></game-card>
      </div>
    `;
  }

  _renderCardList() {
    const { _cards, _cardSelected } = this;

    return html`
      <h1>Pick a card to play.</h1>
      <div class="cards">
        ${_cards.map(card => html`<game-card @card-selected="${_cardSelected}" .selectable="${true}" .card="${card}"></game-card>`)}
      </div>
    `;
  }

  _cardSelected(event) {
    socket.emit('card-selected', { id: event.detail.id });
  }

  stateChanged({ game }) {
    this._cards = game.cards;
    this._selectedCard = game.selectedCard;
  }
}

window.customElements.define('game-player-pick', GamePlayerPick);
