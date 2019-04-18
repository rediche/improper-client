import { html, css } from 'lit-element';
import { PageViewElement } from '../components/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../styles/shared-styles.js';
import { InputSharedStyles } from '../styles/input-shared-styles.js';

class PageIndex extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      InputSharedStyles,
      css`
        
      `
    ];
  }

  render() {
    return html`
      <h1>Improper Cards</h1>
      <p>A Cards Against Humanity clone.</p>
    `;
  }
}

window.customElements.define('page-index', PageIndex);
