import React, { ChangeEvent, FC, useRef, useState } from 'react'

type PropsType = {
    handleSearch: (searchKey: string) => void
}

const TestSearchForm: FC<PropsType> = ({ handleSearch }) => {

    const [searchKey, setSearchKey] = useState<string>("");

    const timeoutRef = useRef(null);

    const handleOnInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchKey(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            handleSearch(value);
        }, 300)
    }

    return (
        <div>
            <input
                type="text"
                className='form-control'
                placeholder='Search test...'
                value={searchKey}
                onChange={handleOnInputChange}
            />
        </div>
    )
}

export default TestSearchForm