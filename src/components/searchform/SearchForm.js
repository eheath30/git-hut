import React, { useState } from "react";
import { getUser } from '../../actions/index';

export default function SearchForm() {

    const [username, setUsername] = useState("")

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        getUser(username)
    }

    const updateInput = (e) => {
        const input = e.target.value
        setUsername(input)
    }


    return (
        <form onSubmit={handleSearchSubmit} className='mt-3 row w-75 mx-auto' role="form" aria-label="form">
            <div className="row">
                <label htmlFor="s_repo" className="col-sm-2 col-form-label">Search Repo:</label>
                <div className="col-sm-10">
                    <input onChange={updateInput} type="text" className="form-control" id="s_repo" placeholder='Github username' />
                </div>
            </div>
        </form>
    )
}
