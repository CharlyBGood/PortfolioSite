import { LightningElement } from 'lwc';

export default class CalltoactionButton extends LightningElement {
  dialog;

  renderedCallback() {
    this.dialog = this.template.querySelector('.contact-dialog');
  }

  showDialog() {
    this.dialog.showModal();
  }
}