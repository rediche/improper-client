import { html, css } from 'lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { InputSharedStyles } from '../styles/input-shared-styles.js';
import { ButtonSharedStyles } from '../styles/button-shared-styles.js';

class PageGame extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      InputSharedStyles,
      ButtonSharedStyles,
      css` 
      `
    ];
  }

  render() {
    return html`
      GAME
    `;
  }
}

window.customElements.define('page-game', PageGame);
