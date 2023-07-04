import {Form, Switch} from "antd";
import React from "react";

function VlanForm() {
    return (
        <>
            <h1>VLAN</h1>
            <Form.Item
                name='enableVlan'
                style={{marginBottom: '10px'}}
                valuePropName='checked'
                initialValue={false}
                children={<Switch/>}
            />
        </>
    )
}

export default VlanForm;