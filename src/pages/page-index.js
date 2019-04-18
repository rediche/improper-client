import { html, css } from 'lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { InputSharedStyles } from '../styles/input-shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class PageIndex extends PageViewElement {
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
        }

        h1 {
          font-size: 60px;
          text-align: center;
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

        p {
          margin-top: auto;
          text-align: center;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Improper Cards.</h1>
  
        <div class="form">
          <input type="text" placeholder="Enter game code">
          <button type="button">Join game</button>
          <button type="button" class="transparent">Create a new game</button>
        </div>
  
        <p>A <a href="https://www.cardsagainsthumanity.com/" target="_blank" rel="noopener">Cards Against Humanity</a> clone.</p>
      </div>
    `;
  }
}

window.customElements.define('page-index', PageIndex);
