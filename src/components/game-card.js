import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';

class GameCard extends LitElement {
  static get properties() {
    return {
      card: { type: Object }
    };
  }

  constructor() {
    super();
    this.card = {};
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          --game-card-border-radius: 16px;
          border-radius: var(--game-card-border-radius);
          background-color: #ffffff;
          color: #000000;
        }

        :host([type="black"]) {
          background-color: #000000;
          color: #ffffff;
        }

        .ratio {
          padding-top: calc(100% * (1 + 1 / 3));
          height: 0;
          position: relative;
        }

        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: var(--game-card-border-radius);
          padding: 24px;
          font-size: 32px;
          font-weight: 700;
        }
      `
    ];
  }

  render() {
    const { card } = this;

    return html`
      <div class="ratio">
        <div class="content">
          <p>${card.text}</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-card', GameCard);
