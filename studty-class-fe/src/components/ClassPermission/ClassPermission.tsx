import React, { FC } from 'react'

type PropsType = {
    classId: string
}

const ClassPermission: FC<PropsType> = ({ classId }) => {

    return (
        <div>
            Please sent accept request to join this class
            <button>Send</button>
        </div>
    )
}

export default ClassPermission