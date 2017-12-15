/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  Icon as IonIcon
} from './icon/icon';

declare global {
  interface HTMLIonIconElement extends IonIcon, HTMLElement {
  }
  var HTMLIonIconElement: {
    prototype: HTMLIonIconElement;
    new (): HTMLIonIconElement;
  };
  interface HTMLElementTagNameMap {
    "ion-icon": HTMLIonIconElement;
  }
  interface ElementTagNameMap {
    "ion-icon": HTMLIonIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": JSXElements.IonIconAttributes;
    }
  }
  namespace JSXElements {
    export interface IonIconAttributes extends HTMLAttributes {
      ariaLabel?: string;
      ios?: string;
      md?: string;
      name?: string;
    }
  }
}

