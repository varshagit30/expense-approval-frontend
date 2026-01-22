import { Table, Tag, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { getExpenses, type Expense } from "../../api/expenses";

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
        <>
            <Title level={3}>Expenses</Title>

            <Table
                rowKey="id"
                columns={columns}
                dataSource={expenses}
                loading={loading}
                pagination={{ pageSize: 5 }}
            />
        </>
    );
};

export default ExpenseList;
