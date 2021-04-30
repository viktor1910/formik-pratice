import React, { useState } from 'react';

interface Props {
    initialValue: {
        [name: string]: any
    }
}

const useCustomFormik = (props: Props) => {
    const [value, setValue] = useState(props.initialValue || {})
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        if (event.target.type === 'checkbox') {
            setValue({
                ...value,
                [name]: event.target.checked
            })
        }
        else setValue({
            ...value,
            [name]: event.target.value
        })

    }
    return { value, handleChange }
}

export default useCustomFormik;