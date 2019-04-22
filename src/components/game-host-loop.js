import { LitElement, html, css } from "lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { PageViewElement } from "./page-view-element.js";

// This element is connected to the Redux store.
import { store } from "../store.js";

import { socket } from "../socket.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles.js";
import { ButtonSharedStyles } from "../styles/button-shared-styles.js";

import "./game-card.js";
import { GAME_STATES } from "../reducers/game.js";

class GameHostLoop extends connect(store)(LitElement) {
  static get properties() {
    return {
      _blackCard: { type: String },
      _playedCards: { type: Array },
      _gameState: { type: String }
    };
  }

  constructor() {
    super();
    this._blackCard = "";
    this._playedCards = [];
    this._gameState = "";
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        .layout {
          display: flex;
          margin: 24px;
        }

        .left {
          width: 300px;
          margin-right: 24px;
          flex: none;
        }

        .right {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, 300px);
          grid-gap: 24px;
        }

        game-card {
          width: 300px;
        }
      `
    ];
  }

  render() {
    const { _blackCard } = this;

    return html`
      <div class="layout">
        <div class="left">
          <game-card type="black" .card="${_blackCard}"></game-card>
        </div>

        <div class="right">${this._renderCardList()}</div>
      </div>

      <!-- TODO: Highlight the winning card for x seconds. -->
    `;
  }

  _renderCardList() {
    const { _playedCards, _gameState } = this;

    return html`
      ${_playedCards.map(card =>
        _gameState === GAME_STATES.CHOOSE_WINNER
          ? html`
              <game-card .card="${card}"></game-card>
            `
          : html`
              <game-card></game-card>
            `
      )}
    `;
  }

  stateChanged({ game }) {
    this._gameState = game.state;
    this._playedCards = game.playedCards.filter(card => card !== null);
    this._blackCard = game.blackCard;
  }
}

window.customElements.define("game-host-loop", GameHostLoop);
