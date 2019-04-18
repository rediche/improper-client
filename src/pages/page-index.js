import { html, css } from "lit-element";
import { PageViewElement } from "../components/page-view-element.js";

// This element is connected to the Redux store.
import { store } from "../store.js";

// These are the actions needed by this element.
import { navigateToGame } from "../actions/app.js";

// These are the shared styles needed by this element.
import { SharedStyles } from "../styles/shared-styles.js";
import { InputSharedStyles } from "../styles/input-shared-styles.js";
import { ButtonSharedStyles } from "../styles/button-shared-styles.js";

class PageIndex extends PageViewElement {
  static get properties() {
    return {
      gameCode: { type: String }
    };
  }

  constructor() {
    super();
    this.gameCode = "";
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

  render() {
    return html`
      <div class="wrapper">
        <h1>Improper Cards.</h1>
  
        <div class="form">
          <input type="text" maxlength="6" placeholder="Enter game code" @input="${this._changeGameCode}">
          <button type="button" ?disabled="${!this.gameCode}" @click="${this._joinGame}">Join game</a>
          <button type="button" class="transparent">Create a new game</button>
        </div>
  
        <p>A <a href="https://www.cardsagainsthumanity.com/" target="_blank" rel="noopener">Cards Against Humanity</a> clone.</p>
      </div>
    `;
  }

  _changeGameCode(e) {
    this.gameCode = e.target.value;
  }

  _joinGame() {
    store.dispatch(navigateToGame(this.gameCode));
  }
}

window.customElements.define("page-index", PageIndex);
