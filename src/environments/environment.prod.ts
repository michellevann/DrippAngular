export const environment = {
  production: true
};

export let APIURL ='';

switch (window.location.hostname) {
  case 'dripp-painting.herokuapp.com':
  APIURL = 'https://dripp-painting.herokuapp.com'
  break;
  default:
  APIURL= 'https://dripp-web-api.azurewebsites.net';
}