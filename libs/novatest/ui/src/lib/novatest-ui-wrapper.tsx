/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import reactToWebComponent from 'react-to-webcomponent';
import { NovatestUi } from './novatest-ui';
export const webcomponent = reactToWebComponent(NovatestUi, React as any, ReactDOM as any);


customElements.define('header-fast-lib', webcomponent as any);