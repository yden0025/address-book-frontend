/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowLeftOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Table, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createContact, fetchNameCount } from "../../redux/actions";
import { IRootState } from "../../redux/reducers";
import { IContact, ICounter } from "../../redux/reducers/contact";
import { http } from "../../utils/http";
import './index.css';

const isUnique = (counter: ICounter, name: string) => {
    if (counter[name] === 1) {
        return 'yes';
    }
    return 'no';
}

const Contact: FC = () => {
    const params = useParams();
    const book_id = params.book_id;
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const counter = useSelector((state: IRootState) => state.contact);
    const dispatch = useDispatch();

    const getContactsByBook = () => {
        http.get(`contact/${book_id}`)
            .then((response) => {
                const contacts = response.data.map((contact: IContact) => (
                    {
                        ...contact,
                        unique: isUnique(counter, contact.name)
                    }));
                setContacts(contacts);
            });
    }

    useEffect(() => {
        dispatch(fetchNameCount());
        getContactsByBook();
    }, [counter]);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        setConfirmLoading(true);
        const contactValues = form.getFieldsValue(true);
        if (book_id) {
            await dispatch(createContact(contactValues, book_id));
            await dispatch(fetchNameCount());
            await getContactsByBook();

        }
        setConfirmLoading(false);
        form.resetFields();
        setVisible(false);
    };

    const handleCancel = () => {
        form.resetFields();
        setVisible(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Unique',
            dataIndex: 'unique',
            key: 'unique',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: IContact) => (
                <Space size="middle">
                    <a onClick={() => { console.log('edit', record._id) }}>Edit</a>
                    <a onClick={() => { console.log('delete', record._id) }}>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <div className='contact'>
            <div className='btn_group'>
                <Tooltip title='Back'>
                    <Button className='back_btn' type='primary' onClick={() => { window.history.go(-1) }} shape='circle' icon={<ArrowLeftOutlined />} />
                </Tooltip>
                <Button className='add_contact_btn' type='primary' onClick={showModal} icon={<UserAddOutlined />}>
                    Add Contact
                </Button>
            </div>

            <Table columns={columns} dataSource={contacts} />

            <Modal
                title="Add Contact"
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
                        label='Phone'
                        name='phone'
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
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

export { isUnique };
export default Contact;