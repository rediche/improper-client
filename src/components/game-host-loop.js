import { LitElement, html, css } from "lit-element";
import { connect } from "pwa-helpers/connect-mixin.js";
import { shuffle } from '../utils';

// This element is connected to the Redux store.
import { store } from "../store.js";
import { GAME_STATES } from "../reducers/game.js";

import { socket } from "../socket.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles.js";
import { ButtonSharedStyles } from "../styles/button-shared-styles.js";

import "./game-card.js";
import "./end-game.js";

class GameHostLoop extends connect(store)(LitElement) {
  static get properties() {
    return {
      _blackCard: { type: String },
      _playedCards: { type: Array },
      _gameState: { type: String },
      _roundWinner: { type: Object }
    };
  }

  constructor() {
    super();
    this._blackCard = "";
    this._playedCards = [];
    this._gameState = "";
    this._roundWinner = null;
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        .layout {
          display: flex;
          padding: 24px;
          position: relative;
          min-height: 100vh;
        }

        .winning-card {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 1;
          transition: .2s ease-in-out;
          pointer-events: none;
        }
        
        .show {
          background-color: rgba(0,0,0,.5);
        }

        .winning-card game-card {
          transition: inherit;
          transform: translateY(-20px);
          opacity: 0;
        }
        
        .winning-card.show game-card {
          transform: translateY(0);
          opacity: 1;
        }
        
        .winning-card h1 {
          opacity: 0;
        }
        
        .winning-card.show h1 {
          opacity: 1;
        }
        
        h1 {
          margin-bottom: 24px;
          color: #ffffff;
        }

        .left {
          width: 300px;
          margin-right: 24px;
          flex: none;
          display: flex;
          flex-direction: column;
        }

        end-game {
          margin-top: auto;
        }

        .right {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, 300px);
          grid-template-rows: max-content;
          grid-gap: 24px;
        }

        game-card {
          width: 300px;
        }
        
        .right game-card {
          align-self: flex-start;
        }
      `
    ];
  }

  render() {
    const { _blackCard, _roundWinner } = this;

    return html`
      <div class="layout">
        ${ this._renderWinnerCard() }

        <div class="left">
          <game-card type="black" .card="${_blackCard}"></game-card>
          <end-game></end-game>
        </div>

        <div class="right">${this._renderCardList()}</div>
      </div>
    `;
  }

  _renderWinnerCard() {
    const { _roundWinner } = this;

    return html`
      <div class="${_roundWinner ? `winning-card show` : `winning-card`}">
        <h1>${_roundWinner ? _roundWinner.nickname : ""} wins the round.</h1>
        <game-card .card="${_roundWinner ? _roundWinner.card : null}"></game-card>
      </div>
    `;
  }

  _renderCardList() {
    const { _playedCards, _gameState } = this;
    const shuffledCards = shuffle(_playedCards);

    return html`
      ${shuffledCards.map(card =>
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
    this._roundWinner = game.roundWinner;
  }
}

window.customElements.define("game-host-loop", GameHostLoop);
