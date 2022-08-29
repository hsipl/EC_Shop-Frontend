import { selectErrors, setPassword, setUsername } from "@/store/login";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const errors = useSelector(selectErrors);

  const dispatch = useDispatch();
  const usernameChanged = (e) => dispatch(setUsername(e.target.value));
  const passwordChanged = (e) => dispatch(setPassword(e.target.value));

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
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            style={{ borderRadius: "5px" }}
            onChange={usernameChanged}
          />
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={errors.password ? "error" : "success"}
          help={errors.password}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ borderRadius: "5px" }}
            onChange={passwordChanged}
          />
        </Form.Item>
        <div style={{ width: "100%", textAlign: "right" }}>
          <a className="login-form-forgot" href="">
            Forgot password?
          </a>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="Login"
            className="login-form-button"
            style={{
              maxWidth: "406px",
              width: "100%",
              height: "32px",
              borderRadius: "10px",
              borderColor: "#20DF7F",
              background: "#20DF7F",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
