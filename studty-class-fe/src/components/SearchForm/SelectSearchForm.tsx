import React, { ChangeEvent, FC, useState } from 'react'

type PropsType = {
    handleSelectSearch: (field: string) => void
    values: Array<string>
}

const SelectSearchForm: FC<PropsType> = ({ handleSelectSearch, values }) => {
    const [feild, setFeild] = useState(values[0]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFeild(value);
        handleSelectSearch(value);
    }

    return (
        <div>
            <select
                className="form-control"
                onChange={handleSelectChange}
                value={feild}>
                {values.map((value, index) => (
                    <option value={value} key={index}>{value}</option>
                ))}

            </select>
        </div>
    )
}

export default SelectSearchForm