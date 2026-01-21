import { Layout, Menu, Button, Typography } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout className="home-layout">
      {/* SIDEBAR
      <Sider width={220} className="home-sider">
        <div className="sider-logo">⬚ Expense Approval</div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          onClick={({ key }) => navigate(`/${key}`)}
          items={[
            {
              key: "home",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "expenses",
              icon: <FileTextOutlined />,
              label: "Expenses",
            },
          ]}
        />
      </Sider> */}

      {/* MAIN AREA */}
      <Layout>
        {/* HEADER */}
        {/* <Header className="home-header">
          <Button
            type="text"
            icon={<LogoutOutlined />}
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header> */}

        {/* CONTENT */}
        <Content className="home-content">
          <Title level={3}>Welcome to Expense Approval System</Title>
          <p>You are logged in successfully.</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
