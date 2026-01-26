import { Button, Table, Tag, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { getExpenses, type Expense } from "../../api/expenses";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/home.css";

const { Title } = Typography;

const statusColorMap: Record<string, string> = {
    DRAFT: "default",
    SUBMITTED: "blue",
    MANAGER_APPROVED: "gold",
    FINANCE_APPROVED: "green",
    REJECTED_BY_MANAGER: "red",
    REJECTED_BY_FINANCE: "red",
};

const ExpenseList = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            setLoading(true);
            const data = await getExpenses();
            setExpenses(data);
        } catch (err) {
            message.error("Failed to load expenses");
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a: Expense, b: Expense) =>
                a.title.localeCompare(b.title),
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Status",
            dataIndex: "currentStatus",
            key: "currentStatus",
            filters: Object.keys(statusColorMap).map((status) => ({
                text: status.replaceAll("_", " "),
                value: status,
            })),
            onFilter: (value: any, record: Expense) =>
                record.currentStatus === value,
            render: (status: string) => (
                <Tag color={statusColorMap[status] || "default"}>
                    {status.replaceAll("_", " ")}
                </Tag>
            ),
        },
        {
            title: "Created By",
            dataIndex: "createdBy",
            key: "createdBy",
        },
    ];

    return (
        <div className="page-container">
            {/* Header Row */}
            <div className="page-header">
                <Title level={3} style={{ margin: 0 }}>
                    Expenses
                </Title>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    size="large"
                    onClick={() => navigate("/expenses/new")}
                >
                    Create New Expense
                </Button>
            </div>

            {/* Table */}
            <Table
                rowKey="id"
                columns={columns}
                dataSource={expenses}
                loading={loading}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
};

export default ExpenseList;
