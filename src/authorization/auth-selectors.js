const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsFetchingCurrent,
};

export default authSelectors;
