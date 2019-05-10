import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';

import { removeOldestErrorMessage } from '../actions/app.js';

import './snack-bar.js';

class ErrorMessages extends connect(store)(LitElement) {
  static get properties() {
    return {
      _errorMessage: { type: String },
      _timeout: { type: Number }
    };
  }

  constructor() {
    super();
    this._errorMessage = "";
  }

  static get styles() {
    return [
      css`
      `
    ];
  }

  render() {
    const { _errorMessage } = this;

    return html`
      <snack-bar ?active="${_errorMessage}">
        ${_errorMessage}
      </snack-bar>
    `;
  }

  stateChanged({ app }) {
    if (app.errorMessages.length > 0) {
      this._errorMessage = app.errorMessages[0];

      if (!this._timeout) {
        this._timeout = setTimeout(() => {
          this._timeout = null;
          this._errorMessage = "";
          store.dispatch(removeOldestErrorMessage());
        }, 3000);
      }
    } else {
      this._errorMessage = "";
    }
  }
}

window.customElements.define('error-messages', ErrorMessages);
