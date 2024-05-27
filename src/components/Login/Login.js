import React, { useContext, useState } from "react";
import classes from "./Login.module.scss";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  const ctxAuth = useContext(AuthContext);
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!email || !emailRegex.test(email.toLowerCase())) {
      setError({
        title: "Invalid Email",
        message: "Please enter a valid email.",
      });
    }
    if (!password) {
      setError({
        title: "Invalid Password",
        message: "Please enter a password.",
      });
    }
    if (email !== "admin@gmail.com" && password !== "123456") {
      setError({
        title: "Login failed",
        message: "Wrong login or password. Try another one",
      });
    }

    ctxAuth.onLogin(email, password);
  };

  return (
    <div className={classes.login}>
      <h1>Spending Program</h1>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClick={() => setError(null)}
        />
      )}
      <Card className={classes.login}>
        <form onSubmit={handlerSubmit}>
          <div className={`${classes.control}`}>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.actions}>
            <Button type='submit' onClick={handlerSubmit}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
