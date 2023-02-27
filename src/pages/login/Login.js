import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/login/loginActionCreators";
import { Button, Form , Header} from "semantic-ui-react";
import './login.scss'
// import '../../src/index.scss';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); // for redirection to homepage
  const dispatch = useDispatch(); //to dispatch actions
  const error = useSelector((state) => state.error); // login error
  const loggedIn = useSelector((state) => state.loggedIn); //login status -> true/false

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const loginClickHandler = (e) => {
    e.preventDefault(); // to prevent refresh after submit is clicked
    if (!(email && password)) {
      dispatch(loginFailure("Please fill both the fields!"));
    } else if (!emailRegex.test(email)) {
      dispatch(loginFailure("Please provide valid email!"));
    } else if (!passwordRegex.test(password)) {
      dispatch(
        loginFailure(
          "Password must contain at least 8 characters,one uppercase letter, one number and one special character"
        )
      );
    } else {
      dispatch(loginSuccess());
      navigate("/homepage");
    }
  };

  return (
    <div className="login flex height100vh">
      <Form inverted className="login__form">
        <Form.Field>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </Form.Field>

        <Header className="login__error" as='h4'>{error}</Header>

        <Button onClick={loginClickHandler} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
