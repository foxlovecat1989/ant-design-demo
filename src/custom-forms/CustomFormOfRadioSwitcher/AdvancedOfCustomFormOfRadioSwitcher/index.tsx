import React from "react";
import {Form, Switch} from "antd";

function AdvancedOfCustomFormOfRadioSwitcher() {
    return (
        <>
            <h1>Advanced</h1>
            <Form.Item
                name='enableAdvanced'
                style={{marginBottom: '10px'}}
                valuePropName='checked'
                initialValue={true}
                children={<Switch/>}
            />
        </>
    )
}

export default AdvancedOfCustomFormOfRadioSwitcher;