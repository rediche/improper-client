import { html, css } from "lit-element";
import { PageViewElement } from "../components/page-view-element.js";

// Load up socket.io
import { socket, gameJoined, gameCreated } from "../socket.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles.js";
import { InputSharedStyles } from "../styles/input-shared-styles.js";
import { ButtonSharedStyles } from "../styles/button-shared-styles.js";

class PageIndex extends PageViewElement {
  static get properties() {
    return {
      _gameCode: { type: String },
      _nickname: { type: String }
    };
  }

  constructor() {
    super();
    this._gameCode = "";
    this._nickname = "";
  }

  static get styles() {
    return [
      SharedStyles,
      InputSharedStyles,
      ButtonSharedStyles,
      css`
        .wrapper {
          min-height: 100vh;
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }

        h1 {
          font-size: 60px;
          margin: auto 0 78px;
        }

        .form {
          display: flex;
          flex-direction: column;
          margin-bottom: 78px;
        }

        input {
          margin-bottom: 28px;
        }

        button + button {
          margin-top: 18px;
        }

        .transparent {
          display: none;
        }

        p {
          margin-top: auto;
          text-align: center;
          font-weight: 600;
        }

        @media screen and (min-width: 1024px) {
          h1 {
            text-align: center;
          }

          .transparent {
            display: inline-flex;
          }
        }
      `
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this._gameCode = "";
    }
  }

  render() {
    const {
      _gameCode,
      _nickname,
      _joinGame,
      _changeGameCode,
      _changeNickname,
      _createGame,
      _keyup
    } = this;

    return html`
      <div class="wrapper">
        <h1>Improper Cards.</h1>
  
        <div class="form">
          <input 
            type="text" 
            maxlength="6" 
            placeholder="Enter game code" 
            aria-label="Enter game code" 
            .value="${_gameCode}" 
            @input="${_changeGameCode}" 
            @keyup="${_keyup}">
          <input
            type="text"
            maxlength="20"
            placeholder="Nickname (optional)"
            aria-label="Nickname (optional)"
            .value="${_nickname}"
            @input="${_changeNickname}">
          <button type="button" ?disabled="${_gameCode.length !==
            6}" @click="${_joinGame}">Join game</a>
          <button type="button" class="transparent" @click="${_createGame}">Create a new game</button>
        </div>
  
        <p>A <a href="https://www.cardsagainsthumanity.com/" target="_blank" rel="noopener">Cards Against Humanity</a> clone.</p>
      </div>
    `;
  }

  _keyup(e) {
    const { _gameCode, _nickname } = this;

    if (_gameCode.length === 6 && e.key === "Enter") {
      this._joinGame();
    }
  }

  _changeGameCode(e) {
    this._gameCode = e.target.value;
  }

  _changeNickname(e) {
    this._nickname = e.target.value;
  }

  _joinGame() {
    const { _gameCode, _nickname } = this;
    socket.emit("join-game", { code: _gameCode.toUpperCase(), nickname: _nickname }, gameJoined);
  }

  _createGame() {
    socket.emit("create-game", {}, gameCreated);
  }
}

window.customElements.define("page-index", PageIndex);
