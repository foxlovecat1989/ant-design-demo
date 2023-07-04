import React from "react";
import {Form, Switch} from "antd";

function NetworkControlOfCustomFormOfRadioSwitcher() {
    return (
        <>
            <h1>Network Control</h1>
            <Form.Item
                name='enableNetworkControl'
                style={{marginBottom: '10px'}}
                valuePropName='checked'
                initialValue={true}
                children={<Switch/>}
            />
        </>
    )
}

export default NetworkControlOfCustomFormOfRadioSwitcher;