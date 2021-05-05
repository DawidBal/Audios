import auth from './modules/auth';

const loginBtn = document.querySelector('.js-login');
loginBtn.addEventListener('click', auth.loginUser);
