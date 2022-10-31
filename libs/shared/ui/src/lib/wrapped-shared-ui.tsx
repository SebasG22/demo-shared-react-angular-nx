import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {  SharedUi } from './shared-ui';
export class HeaderLib extends HTMLElement {
  public mountPoint!: HTMLDivElement;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.mountReactApp();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
  mountReactApp() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.appendChild(this.mountPoint);
    }
    ReactDOM.render(<SharedUi />, this.mountPoint);
  }
}
customElements.define('header-lib', HeaderLib);