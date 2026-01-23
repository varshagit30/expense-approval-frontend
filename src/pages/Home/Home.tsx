import { Card, Col, Row, Statistic, Table, Tag, Button, List, Typography } from "antd";
import {
  DollarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./Home.css";

const { Title, Text } = Typography;

const Home = () => {
  // Dummy KPI data
  const kpis = [
    { title: "Total Expenses", value: 120, icon: <DollarOutlined /> },
    { title: "Pending", value: 8, icon: <ClockCircleOutlined /> },
    { title: "Approved", value: 96, icon: <CheckCircleOutlined /> },
    { title: "Rejected", value: 16, icon: <CloseCircleOutlined /> },
  ];

  // Dummy recent expenses
  const recentExpenses = [
    { key: 1, title: "Uber Ride", status: "Approved", createdBy: "emp" },
    { key: 2, title: "Hotel Stay", status: "Pending", createdBy: "emp" },
    { key: 3, title: "Flight Ticket", status: "Rejected", createdBy: "emp" },
  ];

  const expenseColumns = [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "blue";
        if (status === "Approved") color = "green";
        if (status === "Rejected") color = "red";
        if (status === "Pending") color = "orange";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: "Created By", dataIndex: "createdBy", key: "createdBy" },
  ];

  // Dummy recent activity
  const activity = [
    "emp submitted Uber Ride",
    "manager approved Hotel Stay",
    "finance rejected Flight Ticket",
  ];

  return (
    <div className="home-container">
      <Title level={3}>Dashboard</Title>

      {/* KPI ROW */}
      <Row gutter={16} className="kpi-row">
        {kpis.map((kpi, index) => (
          <Col span={6} key={index}>
            <Card className="kpi-card">
              <Statistic
                title={kpi.title}
                value={kpi.value}
                prefix={kpi.icon}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* MAIN CONTENT */}
      <Row gutter={16} className="main-row">
        {/* Recent Expenses */}
        <Col span={14}>
          <Card title="Recent Expenses" className="home-card">
            <Table
              dataSource={recentExpenses}
              columns={expenseColumns}
              pagination={false}
            />
          </Card>
        </Col>

        {/* Recent Activity */}
        <Col span={10}>
          <Card title="Recent Activity" className="home-card">
            <List
              dataSource={activity}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
