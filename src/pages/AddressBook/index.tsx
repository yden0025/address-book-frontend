import { DeleteOutlined, EditOutlined, EyeOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Card, Form, Input, List, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../redux/actions";
import { IRootState } from "../../redux/reducers";
import './index.css';

const AddressBook: FC = () => {
    const books = useSelector((state: IRootState) => state.book);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const data = [{ _id: '', name: '', description: '' }, ...books];

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        setConfirmLoading(true);
        const bookValues = form.getFieldsValue(true);
        await dispatch(createBook(bookValues));
        setConfirmLoading(false);
        form.resetFields();
        setVisible(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    };

    return (
        <div className='address_book'>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 6,
                }}
                dataSource={data}
                renderItem={item => {
                    if (item.name === '') {
                        return (
                            <List.Item>
                                <Card
                                    hoverable
                                    className='addCard'
                                    onClick={showModal}
                                >
                                    <PlusCircleFilled />
                                </Card>
                            </List.Item>
                        )
                    }
                    return (
                        <List.Item>
                            <Card title={item.name}
                                actions={[
                                    <EyeOutlined
                                        key="view"
                                        onClick={() => {
                                            navigate(`/contacts/${item._id}`);
                                        }}
                                    />,
                                    <EditOutlined key="edit" />,
                                    <DeleteOutlined key="delete" />,
                                ]}
                                hoverable
                            >
                                {item.description}
                            </Card>
                        </List.Item>
                    )
                }}
            />

            <Modal
                title="Add Book"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    name='basic'
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Name'
                        name='name'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label='Description'
                        name='description'
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddressBook;