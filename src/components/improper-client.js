import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate
} from '../actions/app.js';

// These are the elements needed by this element.
import './error-messages.js';

class ImproperClient extends connect(store)(LitElement) {
  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        
        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }
        
        .page {
          min-height: 100vh;
          display: none;
        }

        .page[active] {
          display: block;
        }
      `
    ];
  }

  render() {
    // Anything that's related to rendering should be done in here.
    return html`
      <main role="main" class="main-content">
        <page-index class="page" ?active="${this._page === 'index'}"></page-index>
        <page-game class="page" ?active="${this._page === 'game'}"></page-game>
        <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
      </main>

      <error-messages></error-messages>
    `;
  }

  firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = `${this._page} - ${this.appTitle}`;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
  }
}

window.customElements.define('improper-client', ImproperClient);
