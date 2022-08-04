import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../UserContext";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");
    const [user, setUser] = useContext(UserContext);


    function handleSearchTerm(e) {
        let userName = e.target.value;
        setSearchTerm(userName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(searchTerm);
    };


    return (
        <form className='mt-3 row w-50 mx-auto' role="form" aria-label="form" onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="s_repo" className="col-sm-4 col-form-label-lg"><i className="fa-solid fa-magnifying-glass"></i> Search User:</label>
                <div className="col-sm-8 input-group-lg my-auto">
                    <input type="text" className="form-control " id="s_repo" placeholder='Github username' onChange={handleSearchTerm} />
                </div>
            </div>
        </form>
    )
}
