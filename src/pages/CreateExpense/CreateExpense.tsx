import { Button, Card, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { createExpense } from "../../api/expenses";
import "../Home/Home.css";

const { Title } = Typography;

const CreateExpense = () => {
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        try {
            const userId = localStorage.getItem("username");

            if (!userId) {
                message.error("User not logged in");
                return;
            }

            const payload = {
                title: values.title,
                description: values.description,
                createdBy: Number(userId), 
            };


            await createExpense(payload);

            message.success("Expense created successfully");
            navigate("/expenses");
        } catch (err) {
            message.error("Failed to create expense");
            console.error(err);
        }
    };
    return (
        <div className="create-expense-page">
            <Card className="create-expense-card">
                <Title level={3}>Create New Expense</Title>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    className="create-expense-form"
                >
                    <Form.Item
                        label="TITLE"
                        name="title"
                        rules={[{ required: true, message: "Title is required" }]}
                    >
                        <Input placeholder="e.g. Uber Ride" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="DESCRIPTION"
                        name="description"
                        rules={[{ required: true, message: "Description is required" }]}
                    >
                        <Input.TextArea
                            rows={4}
                            placeholder="Enter expense details"
                        />
                    </Form.Item>

                    <div className="create-expense-actions">
                        <Button onClick={() => navigate("/expenses")}>
                            Cancel
                        </Button>

                        <Button type="primary" htmlType="submit">
                            Create Expense
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default CreateExpense;
