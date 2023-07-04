import React from "react";
import {Form, Switch} from "antd";

function RadioOfCustomFormOfRadioSwitcher() {
    return (
        <>
            <h1>Radio</h1>
            <Form.Item
                name='enableRadio'
                style={{marginBottom: '10px'}}
                valuePropName='checked'
                initialValue={false}
                children={<Switch/>}
            />
        </>
    )
}

export default RadioOfCustomFormOfRadioSwitcher;