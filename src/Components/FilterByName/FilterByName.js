import React from 'react'
import { Form } from 'react-bootstrap'
import './FilterByName.css'
const FilterByName = ({ setsearch }) => {
    return (
        <div >
            <Form.Control className="filter" type="text" placeholder="Enter movie name ..."
                onChange={(e) => setsearch(e.target.value)}

            />

        </div>
    )
}

export default FilterByName
