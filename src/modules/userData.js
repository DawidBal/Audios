const getUserData = async (authToken) => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const data = await response.json();
  return data;
};

const toggleLogin = () => {
  const login = document.querySelector('.login');
  const content = document.querySelector('.content');
  login.classList.toggle('hidden');
  content.classList.toggle('hidden');
};

const showUserData = async (authToken) => {
  toggleLogin();
  const data = await getUserData(authToken);
  const userLink = document.querySelector('.user-link');
  const userAvatar = document.querySelector('.user-avatar');
  userLink.href = data.external_urls.spotify;
  userAvatar.src = data.images[0].url;
};

export default { showUserData };
