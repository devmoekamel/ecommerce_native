export let addUserCookie = (value) => {
  let today = new Date();
  today.setDate(today.getDate() + 3);
  document.cookie = `user=${value}; expires=${today}; path=/`;
};

export let getUserCookie = () => {
  let cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    let cookiePart = cookie.split("=");
    if (cookiePart[0] === "user") {
      return cookiePart[1];
    }
  }

  return null;
};
