import userData from './userData';

const CLIENT_ID = 'ed39e72a37664a05a5784f53ba95d6a9';
const REDIRECT_URI = 'http://127.0.0.1:5500/dist/';
const ENDPOINT = 'https://accounts.spotify.com/authorize';

const stateKey = 'spotify_auth_state';

/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
function getHashParams() {
  const hashParams = {};
  let e;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
function generateRandomString(length) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const params = getHashParams();

const { access_token } = params;
const { state } = params;
const storedState = localStorage.getItem(stateKey);
if (access_token && (state == null || state !== storedState)) {
  alert('There was an error during the authentication');
} else {
  localStorage.removeItem(stateKey);
  if (access_token) {
    userData.showUserData(access_token);
  }
}
const loginUser = () => {
  const state = generateRandomString(16);
  localStorage.setItem(stateKey, state);
  const scope = 'user-read-private user-read-email';

  let url = ENDPOINT;
  url += '?response_type=token';
  url += `&client_id=${encodeURIComponent(CLIENT_ID)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  url += `&state=${encodeURIComponent(state)}`;

  window.location = url;
};

export default { loginUser };
