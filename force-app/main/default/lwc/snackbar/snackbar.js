import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {

  snackbarMessage;

  @api
  showSnackBar(message) {
    const snackbar = this.template.querySelector('.snackbar');
    this.snackbarMessage = message;

    snackbar.classList.add('show');
    setTimeout(function(){ snackbar.classList.remove("show"); }, 2600);

  }
}