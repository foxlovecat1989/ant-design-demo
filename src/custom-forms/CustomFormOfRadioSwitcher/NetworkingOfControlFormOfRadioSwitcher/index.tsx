import React from "react";
import {Form, Switch} from "antd";

function NetworkingOfControlFormOfRadioSwitcher() {
    return (
        <>
            <h1>Networking</h1>
            <Form.Item
                name='enableNetworking'
                style={{marginBottom: '10px'}}
                valuePropName='checked'
                initialValue={true}
                children={<Switch/>}
            />
        </>
    )
}

export default NetworkingOfControlFormOfRadioSwitcher;