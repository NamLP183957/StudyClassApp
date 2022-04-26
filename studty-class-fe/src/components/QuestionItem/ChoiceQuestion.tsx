import React, { FC } from 'react'

type PropsType = {
    choiceList: any
}

const ALDPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const ChoiceQuestion: FC<PropsType> = ({ choiceList }) => {

    return (
        <div className="card-body">
            {choiceList.map((choice, index) => (
                <div className={choice.answer ? 'form row gray-bg3 mt-1' : 'form row mt-1'} >
                    <div className="col-sm-1">
                        {ALDPHABET[index]}:
                    </div>
                    <div className="col-sm-10">
                        {choice.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChoiceQuestion