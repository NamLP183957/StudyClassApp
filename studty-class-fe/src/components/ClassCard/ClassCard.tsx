import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './ClassCard.css'
type PropsType = {
    clas: any
}

const ClassCard: FC<PropsType> = ({ clas }) => {

    const history = useHistory();

    const goToClassPage = (classId: any) => {
        history.push(`/class/${clas.id}`)
    }
    return (
        <div className="card class-card" onClick={() => goToClassPage(clas.id)}>
            <div className="card-header title">
                {clas.name}
            </div>
            <div className="card-body">
                <ul>
                    <li>{clas.description}</li>
                    <li>Creater: {clas.createUser.firstName}</li>
                </ul>
            </div>
            {/* <div className="class-card-footer">
                <Link to={`/class/${clas.id}`} className="btn btn-success">
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            </div> */}

        </div>
    )
}

export default ClassCard