import { LitElement, html, css } from "lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { PageViewElement } from "./page-view-element.js";

// This element is connected to the Redux store.
import { store } from "../store.js";

// Load up socket.io
import { socket } from "../socket.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles.js";

import "./game-card.js";

class GamePlayerWinner extends connect(store)(LitElement) {
  static get properties() {
    return {
      _playedCards: { type: Array },
      _isCzar: { type: Boolean },
      _gameCode: { type: String },
      _selectedCard: { type: Number }
    };
  }

  constructor() {
    super();
    this._playedCards = [];
    this._isCzar = false;
    this._gameCode = "";
    this._selectedCard = null;
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

        .vertical-center {
          margin-bottom: auto;
          margin-top: auto;
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

        @media screen and (min-width: 1024px) {
          h1 {
            text-align: center;
          }
        }
      `
    ];
  }

  render() {
    const { _isCzar, _selectedCard } = this;

    return html`
      <div class="full-height">
        ${_isCzar
          ? _selectedCard
            ? this._renderSelectedCard()
            : this._renderCardList()
          : this._renderWaiting()}
      </div>
    `;
  }

  _renderWaiting() {
    return html`
      <h1 class="vertical-center">Waiting for Czar to pick.</h1>
    `;
  }

  _renderSelectedCard() {
    const { _selectedCard, _playedCards } = this;

    return html`
      <div class="selected-card">
        <game-card
          .card="${_playedCards.find(card => card.id === _selectedCard)}"
        ></game-card>
      </div>
    `;
  }

  _renderCardList() {
    const { _playedCards, _cardSelected, _hasSelectedCard } = this;

    return html`
      <h1>Pick a winner.</h1>
      <div class="cards">
        ${_playedCards.map(
          card =>
            html`
              <game-card
                @card-selected="${_cardSelected}"
                .selectable="${!_hasSelectedCard}"
                .card="${card}"
              ></game-card>
            `
        )}
      </div>
    `;
  }

  _cardSelected(event) {
    const { _gameCode } = this;
    const cardId = event.detail.id;

    socket.emit("winner-selected", {
      cardId,
      gameCode: _gameCode
    });
    
    this._selectedCard = cardId;
  }

  stateChanged({ game }) {
    this._gameCode = game.code;
    this._playedCards = game.playedCards;
    this._isCzar = game.czar === socket.id;
  }
}

window.customElements.define("game-player-winner", GamePlayerWinner);
