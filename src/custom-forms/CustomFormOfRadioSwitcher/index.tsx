import React, {useState} from 'react';
import {Form, Radio, RadioChangeEvent} from 'antd';
import VLANOfCustomFormOfRadioSwitcher from "./VLANOfCustomFormOfRadioSwitcher";
import NetworkControlOfCustomFormOfRadioSwitcher from "./NetworkControlOfCustomFormOfRadioSwitcher";
import RadioOfCustomFormOfRadioSwitcher from "./RadioOfCustomFormOfRadioSwitcher";
import NetworkingOfControlFormOfRadioSwitcher from "./NetworkingOfControlFormOfRadioSwitcher";
import AdvancedOfCustomFormOfRadioSwitcher from "./AdvancedOfCustomFormOfRadioSwitcher";

function FormSwitcher() {
    const [form] = Form.useForm();
    const formTypes: string[] = ['VLAN', 'Network Control', 'Radio', 'Networking', 'Advanced'];

    const [selectedValue, setSelectedValue] = useState<string>(formTypes[0]);
    const handleSelectedValueChange = ({target}: RadioChangeEvent): void => {
        setSelectedValue(target.value)
    };

    const getComponentBySelectedValue = (selectedValue: string) => {
        switch (selectedValue) {
            case 'Network Control':
                return <NetworkControlOfCustomFormOfRadioSwitcher/>;
            case 'Radio':
                return <RadioOfCustomFormOfRadioSwitcher/>;
            case 'Networking':
                return <NetworkingOfControlFormOfRadioSwitcher/>;
            case 'Advanced':
                return <AdvancedOfCustomFormOfRadioSwitcher/>;
            case 'VLAN':
            default:
                return <VLANOfCustomFormOfRadioSwitcher/>;
        }
    }


    return (
        <>
            <Form
                layout='vertical'
                style={{marginTop: 10}}
                form={form}
                name='basicFrom'
            >
                <Form.Item
                    name={'formType'}
                    children={
                        <Radio.Group
                            defaultValue={selectedValue}
                            onChange={handleSelectedValueChange}
                            value={selectedValue}
                            options={formTypes}
                            optionType={'button'}
                        />
                    }
                />
                {getComponentBySelectedValue(selectedValue)}
            </Form>
        </>
    );
}

export default FormSwitcher;
