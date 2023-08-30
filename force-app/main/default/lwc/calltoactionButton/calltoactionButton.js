import { LightningElement } from 'lwc';
import createLead from '@salesforce/apex/ContactMeController.createLead';


export default class CalltoactionButton extends LightningElement {
  dialog;
  firstName
  lastName;
  company;
  email;
  description;
  snackbar;

  renderedCallback() {
    this.dialog = this.template.querySelector('.contact-dialog');
    this.firstName = this.template.querySelector('.firstName');
    this.lastName = this.template.querySelector('.lastName');
    this.company = this.template.querySelector('.company');
    this.email = this.template.querySelector('.email');
    this.description = this.template.querySelector('.description');
    this.snackbar = this.template.querySelector('c-snackbar');
  }

  showDialog() {
    this.dialog.showModal();
  }

  closeDialog() {
    this.dialog.close();
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstNameVal = this.firstName.value;
    const lastNameVal = this.lastName.value;
    const companyVal = this.company.value;
    const emailVal = this.email.value;
    const descriptionVal = this.description.value;

    createLead({
      firstName: firstNameVal,
      lastName: lastNameVal,
      company: companyVal,
      email: emailVal,
      description: descriptionVal
    })
    .then(() => {this.snackbar.showSnackBar('Your message has been send.')})
    .catch((error) => {
      this.snackbar.showSnackBar('Unable to send the form.');
      console.log(JSON.stringify(error));
    });
    this.closeDialog();
  }

}