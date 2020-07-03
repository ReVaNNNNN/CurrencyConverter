import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label>
        Podaj login <input type="text"></input>
      </label>
      <label>
        Podaj hasło <input type="password"></input>
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
