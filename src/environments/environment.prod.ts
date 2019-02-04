export const environment = {
  production: true
};

export let APIURL ='';

switch (window.location.hostname) {
  case 'https://mydripp.herokuapp.com':
  APIURL = 'https://dripp.azurewebsites.net/api'
  break;
  default:
  APIURL= 'https://dripp.azurewebsites.net/api';
}