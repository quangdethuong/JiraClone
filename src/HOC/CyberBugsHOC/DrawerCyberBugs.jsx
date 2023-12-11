import { Button, Drawer, Radio, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DrawerCyberBugs = () => {
    const { visible, ComponentContentDrawer, callSubmitForm } = useSelector(state => state.DrawerReducer)
    const dispatch = useDispatch();

    const showDrawer = () => {
        dispatch({
            type: 'OPEN_DRAWER'
        })
    };

    const onClose = () => {
        dispatch({
            type: 'CLOSE_DRAWER'
        })
    };
    return (
        <>
            {/* <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> New account
            </Button> */}
            <Drawer
                title="Update Project"
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}

                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                {/* Nội dung thay đổi của drawer */}
                {ComponentContentDrawer}

            </Drawer>
        </>
    )
}

export default DrawerCyberBugs;
