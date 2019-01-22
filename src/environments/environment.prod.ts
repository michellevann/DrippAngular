export const environment = {
  production: true
};

export let APIURL ='';

switch (window.location.hostname) {
  case 'https://dripp-painting.herokuapp.com':
  APIURL = 'https://dripp-web-api.azurewebsites.net/api'
  break;
  default:
  APIURL= 'https://dripp-web-api.azurewebsites.net/api';
}