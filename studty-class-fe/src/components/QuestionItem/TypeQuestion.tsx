import React, { FC } from 'react'

type PropsType = {
    answer: string
}

const TypeQuestion: FC<PropsType> = ({ answer }) => {

    return (
        <div className="card-body">
            <div className="form-row">
                <label className="col-form-label col-sm-2">Answer:</label>
                <div className="col-sm-10 mt-2">{answer}</div>
            </div>
        </div>
    )
}

export default TypeQuestion