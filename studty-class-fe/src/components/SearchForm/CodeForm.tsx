import React, { ChangeEvent, useRef, useState } from 'react'

const CodeForm = () => {

    const [code, setCode] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setCode(value);
    }

    return (
        <div className='row'>
            <div className="col-sm-8">
                <input
                    type="text"
                    className='form-control'
                    placeholder='Enter code to join class...'
                    value={code}
                    onChange={handleInputChange}
                />
            </div>
            <div className="col-sm-4">
                <button className="btn btn-success">Join\</button>
            </div>
        </div>
    )
}

export default CodeForm