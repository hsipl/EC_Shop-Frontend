import {
  selectErrors,
  setPassword,
  setUsername,
  useLoginMutation,
} from "@/store/login";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

export default function Login() {
  const errors = useSelector(selectErrors);

  const dispatch = useDispatch();
  const usernameChanged = (e) => dispatch(setUsername(e.target.value));
  const passwordChanged = (e) => dispatch(setPassword(e.target.value));

  const [login] = useLoginMutation();

  const onFinish = async (values) => {
    if (!(errors.username || errors.password)) {
      const res = await login(values);
      console.log(res);
    }
  };

  return (
    <div className="root">
      <Typography.Title style={{ color: "#fff" }}>Sign In</Typography.Title>
      <Form name="normal_login" className="form-box" onFinish={onFinish}>
        <Form.Item
          name="username"
          validateStatus={errors.username ? "error" : "success"}
          help={errors.username}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            className="form-input"
            onChange={usernameChanged}
          />
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={errors.password ? "error" : "success"}
          help={errors.password}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            className="form-input"
            onChange={passwordChanged}
          />
        </Form.Item>
        <div style={{ width: "100%", textAlign: "right" }}>
          <a href="">Forgot password?</a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="Login" className="login-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
