import React, { useRef } from "react";

export default function UncontrolledLogin() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  const onSubmit = (event) => {
    const { username, password, remember } = event.target.elements;

    console.log("Using DOM API:");
    console.log("Username:", username.value);
    console.log("Password:", password.value);
    console.log("Remember:", remember.checked);
  };

  const loginWithFormData = () => {
    const formData = new FormData();
    formData.append("username", usernameRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("remember", rememberRef.current.checked);

    console.log("Using FormData API:");
    console.log("Username:", formData.get("username"));
    console.log("Password:", formData.get("password"));
    console.log("Remember:", formData.get("remember"));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              ref={usernameRef}
              placeholder="Inserisci Username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Inserisci Password"
            />
          </label>
        </div>
        <div>
          <label>
            Ricordami:
            <input type="checkbox" name="remember" ref={rememberRef} />
          </label>
        </div>
        <div>
          <button type="submit">Login (DOM API)</button>
        </div>
      </form>
      <div>
        <button onClick={loginWithFormData}>Login (FormData API)</button>
      </div>
    </div>
  );
}
