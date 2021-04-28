import React, { useState } from 'react';

type ValueChild = boolean | string | number;

type ParamChild = {
    values: {
        [name: string] : ValueChild,
        isGoing: boolean
    },
    handleChange: (event: any) => void
}

interface Props {
    children: ({ values }: ParamChild) => JSX.Element,
    initialValues: {
        [nameValue: string]: ValueChild,
        isGoing: boolean,
    }
}

const MiniFormik: React.FC<Props> = ({ children, initialValues }) => {
    const [valueState, setValueState] = useState({
        values: initialValues || {},
        touched: {},
        errors: {}
    });
    const handleChange = (event: any) => {
        const target = event.target;
        const valueEvent = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setValueState({
            ...valueState,
            [name]: valueEvent
        })
    }
    return children({ ...valueState, handleChange })
}

export default MiniFormik;