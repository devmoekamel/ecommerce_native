export let addUserCookie = (value) => {
  let today = new Date();
  today.setDate(today.getDate() + 3);
  document.cookie = `user=${value}; expires=${today}; path=/`;
};

export let getUser = () => {
  let username = localStorage.getItem("user");

  if (username) {
    return JSON.parse(username);
  }
  return null;
};
