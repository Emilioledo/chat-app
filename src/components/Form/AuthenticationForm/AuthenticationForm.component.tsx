import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../../../services";
import { setUserState } from "../../../redux/userSlice";
import "./AuthenticationForm.styles.css";

interface Props {
  isLoggin: boolean;
}

export const AuthenticationForm: React.FC<Props> = ({ isLoggin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoggin) {
      const response = await loginUser(formData);
      dispatch(setUserState({ isLogged: true }));
      if (response?.status === 200) navigate("/chat");
    } else {
      const response = await createUser(formData);
      dispatch(setUserState({ isLogged: true }));
      if (response?.status === 200) navigate("/chat");
    }
  };

  return (
    <Form className={"form-container"} onSubmit={handleSubmit}>
      {isLoggin && <h3>Login</h3>}
      {!isLoggin && <h3>Register</h3>}
      <Form.Group className="mb-3 mt-4">
        <Form.Label>Username</Form.Label>
        <Form.Control
          placeholder="Enter username"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <div>
        {isLoggin && (
          <div>
            <span>Are you new?</span> <Link to="/register">Register</Link>
          </div>
        )}
        {!isLoggin && <Link to="/login">Go to login page</Link>}
      </div>
      <Button variant="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};
