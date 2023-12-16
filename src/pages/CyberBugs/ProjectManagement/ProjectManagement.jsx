import React, { useState, useEffect } from 'react'
import ReactHtmlParser from "react-html-parser";
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { AutoComplete, Avatar, Button, Popconfirm, Popover, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import FormEditProject from '../../../components/Form/FormEditProject';



export default function ProjectManagement() {
    const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);
    const { ComponentContentDrawer } = useSelector(state => state.DrawerReducer);

    const { userSearch } = useSelector(state => state.UserLoginCyberBugsReducer)

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const [state, setState] = useState({
        filteredInfo: null,
        sortedInfo: null,
    });

    useEffect(() => {
        dispatch({
            type: 'GET_ALL_PROJECT_SAGA'
        })
    }, [])
    const showDrawer = () => {
        return dispatch({
            type: 'OPEN_FORM_EDIT',
            Component: <FormEditProject />
        })
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    const clearFilters = () => {
        setState({ filteredInfo: null });
    };

    const clearAll = () => {
        setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    const setAgeSort = () => {
        setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    let { sortedInfo, filteredInfo } = state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (item2, item1) => {
                return item2.id - item1.id;
            },
            sortDirections: ['descend'],

        },
        {
            title: 'projectName',
            dataIndex: 'projectName',
            key: 'projectName',
            sorter: (item2, item1) => {
                let projectName1 = item1.projectName?.trim().toLowerCase();
                let projectName2 = item2.projectName?.trim().toLowerCase();
                if (projectName2 < projectName1) {
                    return -1;
                }
                return 1;
            },

        },

        {
            title: 'category',
            dataIndex: 'categoryName',
            key: 'categoryName',
            sorter: (item2, item1) => {
                let categoryName1 = item1.categoryName?.trim().toLowerCase();
                let categoryName2 = item2.categoryName?.trim().toLowerCase();
                if (categoryName2 < categoryName1) {
                    return -1;
                }
                return 1;
            },

        },
        {
            title: 'creator',
            // dataIndex: 'description',
            key: 'creator',
            render: (text, record, index) => {
                return <Tag color="green">{record.creator?.name}</Tag>
            },
            sorter: (item2, item1) => {
                let creator1 = item1.creator?.name.trim().toLowerCase();
                let creator2 = item2.creator?.name.trim().toLowerCase();
                if (creator2 < creator1) {
                    return -1;
                }
                return 1;
            },
        },
        {
            title: 'members',
            key: 'members',
            render: (text, record, index) => {
                return <div>
                    {record.members?.slice(0, 3).map((member, index) => {
                        return <Avatar key={index} src={member.avatar} />
                    })}

                    {record.members?.length > 3 ? <Avatar>...</Avatar> : ''}

                    <Popover placement="rightTop" title={"Add user"} content={() => {
                        return <AutoComplete

                            options={userSearch?.map((user, index) => {
                                return { label: user.name, value: user.userId.toString() }
                            })}

                            value={value}

                            onChange={(text) => {
                                setValue(text);
                            }}

                            onSelect={(valueSelect, option) => {
                                //set giá trị của hộp thọa = option.label
                                setValue(option.label);
                                //Gọi api gửi về backend
                                dispatch({
                                    type: 'ADD_USER_PROJECT_API',
                                    userProject: {
                                        "projectId": record.id,
                                        "userId": valueSelect
                                    }
                                })


                            }}
                            style={{ width: '100%' }} onSearch={(value) => {
                                dispatch({
                                    type: 'GET_USER_API',
                                    keyword: value
                                })

                            }} />
                    }} trigger="click">
                        <Button style={{ borderRadius: '50%' }}>+</Button>
                    </Popover>
                </div>
            }

        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => {
                return <div>
                    <button className="btn mr-2 btn-primary" onClick={() => {
                        dispatch({
                            type: 'OPEN_FORM_EDIT',
                            Component: <FormEditProject />
                        })
                        dispatch({
                            type: 'OPEN_EDIT_PROJECT',
                            projectEditModel: record
                        })
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>


                    <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={() => {
                            dispatch({ type: 'DELETE_PROJECT_SAGA', idProject: record.id })
                        }}

                        okText="Yes"
                        cancelText="No"
                    >
                        <button className="btn btn-danger">
                            <DeleteOutlined style={{ fontSize: 17 }} />
                        </button>
                    </Popconfirm>,
                </div>
            },
        }

    ];
    return (
        <div className="container-fluid mt-5">
            <h3>Project management</h3>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table columns={columns} rowKey={"id"} dataSource={projectList} onChange={handleChange} />
        </div>
    )
}
