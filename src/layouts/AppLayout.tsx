import { Layout, Menu, Button } from "antd";
import {
    HomeOutlined,
    FileTextOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./AppLayout.css";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Layout className="app-layout">
            <Sider width={220} className="app-sider">
                <div className="sider-logo">⬚ Expense Approval</div>

                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname.replace("/", "")]}
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
            </Sider>

            <Layout>
                <Header className="app-header">
                    <Button
                        type="text"
                        icon={<LogoutOutlined />}
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Header>

                <Content className="app-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
