export const environment = {
  production: true
};

export let APIURL ='';
switch (window.location.hostname) {
  case 'lcn-my-drippapp.herokuapp.com':
  APIURL = 'https://lcn-my-drippapp.herokuapp.com'
  break;
  default:
  APIURL= 'https://dripp-web-api.azurewebsites.net';
}