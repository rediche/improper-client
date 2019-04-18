import { LitElement, html, css } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class GameCard extends LitElement {
  static get properties() {
    return {
      card: { type: Object },
      selectable: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.card = {};
    this.selectable = false;
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
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
          font-size: 32px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
        }
        
        .padding {
          padding: 24px;
        }

        button {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: var(--game-card-border-radius);
          border-bottom-right-radius: var(--game-card-border-radius);
          margin-top: auto;
          width: 100%;
        }
      `
    ];
  }

  render() {
    const { card, selectable } = this;

    // TODO: Button text should be based off an attribute.
    // Should send event outside of the component.
    return html`
      <div class="ratio">
        <div class="content">
          <div class="padding">
            <p>${card.text}</p>
          </div>

          ${ selectable ? html`<button type="button">Pick card</button>` : '' }
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-card', GameCard);
