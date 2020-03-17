let APIURL ='';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost: 3002';
        break;
        case 'amb-rescueapp.herokuapp.com':
        APIURL = "https://amb-rescueapp.herokuapp.com"
}

export default APIURL;