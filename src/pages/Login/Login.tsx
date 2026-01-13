import { Button, Card, Input, Typography } from "antd";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Card className="login-card">
        <Typography.Title level={3} className="login-title">
          Expense Approval
        </Typography.Title>

        <Typography.Text type="secondary" className="login-subtitle">
          Sign in to continue
        </Typography.Text>

        <div className="login-form">
          <Input
            placeholder="Username"
            size="large"
            className="login-input"
          />

          <Input.Password
            placeholder="Password"
            size="large"
            className="login-input"
          />

          <Button type="primary" size="large" block>
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
