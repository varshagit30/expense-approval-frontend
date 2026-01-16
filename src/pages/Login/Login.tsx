import { Button, Card, Checkbox, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Login.css";

const { Title, Text } = Typography;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      {/* LEFT PANEL */}
      <div className="login-left">
        <div className="brand">
          <div className="logo">⬚</div>
          <Title level={3} className="brand-title">
            Expense Approval System
          </Title>
          {/* <Text className="brand-subtitle">
            Expense Management System
          </Text> */}

          <Text className="brand-desc">
            A powerful yet easy-to-use application for managing approvals and
            expenses.
          </Text>
        </div>

        {/* <Text className="version-text">Version 1.0</Text> */}
      </div>

      {/* RIGHT PANEL */}
      <div className="login-right">
        {/* <div className="top-action">
          <Text>Don’t have an account?</Text>
          <Button type="default" size="small">
            CREATE ACCOUNT
          </Button>
        </div> */}

        <Card className="login-card" bordered={false}>
          <Title level={3}>Log into Expense Approval </Title>
          <Text type="secondary">
            Enter your login details below.
          </Text>

          <div className="login-form">
            <div className="field">
              <Text className="label">EMAIL ADDRESS</Text>
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter your email"
                size="large"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="field">
              <div className="password-header">
                <Text className="label">PASSWORD</Text>
                <a className="forgot">Forgot your password?</a>
              </div>

              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                size="large"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <Checkbox className="remember">Remember me</Checkbox> */}

            <Button
              type="primary"
              size="large"
              block
              className="login-btn"
            >
              SIGN IN
            </Button>
          </div>
        </Card>

        <Text className="copyright">
          © 2026 Expense Approval. All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Login;
