import {
    FacebookOutlined,
    GooglePlusOutlined,
    HomeOutlined,
    InstagramOutlined,
    LoginOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TwitterOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Space, Table, Tag, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import { useState } from 'react';
import "./App.css"

const { Header, Sider, Content } = Layout;
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='h-100vh'>
            <Sider trigger={null} collapsible collapsed={collapsed} className='p-relative'>
                <div className='logo'>
                    <a href='#' className='logo-link'>LOGO</a>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'User',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Camera',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'File',
                        },
                        {
                            key: '4',
                            icon: <GooglePlusOutlined />,
                            label: 'Google',
                            children: [
                                {
                                    key: '5',
                                    icon: <TwitterOutlined />,
                                    label: 'Twitter',
                                },
                                {
                                    key: '6',
                                    icon: <FacebookOutlined />,
                                    label: 'Facebook',
                                },
                                {
                                    key: '7',
                                    icon: <InstagramOutlined />,
                                    label: 'Instagram',
                                }
                            ]
                        },
                        {
                            key: '8',
                            icon: <LoginOutlined />,
                            label: 'Login',
                        }
                    ]}
                />

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <Breadcrumb
                        style={{ marginLeft: 20 }}
                        items={[
                            {
                                href: '',
                                title: <HomeOutlined />,
                            },
                            {
                                href: '',
                                title: (
                                    <>
                                        <UserOutlined />
                                        <span>User</span>
                                    </>
                                ),
                            },
                            {
                                title: 'Dashboard',
                            },
                        ]}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <div> <span>Dashboard</span></div>
                    <Table dataSource={data}>
                        <ColumnGroup title="Name">
                            <Column title="First Name" dataIndex="firstName" key="firstName" />
                            <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        </ColumnGroup>
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column
                            title="Tags"
                            dataIndex="tags"
                            key="tags"
                            render={(tags) => (
                                <>
                                    {tags.map((tag) => (
                                        <Tag color="blue" key={tag}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </>
                            )}
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={(_, record) => (
                                <Space size="middle">
                                    <a>Invite {record.lastName}</a>
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>
                </Content>
                <Footer className='t-center'>Made with ❤ by Ant Group and Ant Design Community</Footer>
            </Layout>
        </Layout>
    );
};
export default App;