import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../UserContext";

export default function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [user, setUser] = useContext(UserContext);

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    function handleSearchTerm(e) {
        let userName = e.target.value;
        setSearchTerm(userName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(searchTerm);
        props.onSubmit('');
        props.setUserHistory([...props.userHistory, { time: dateTime, userH: searchTerm }])
    };


    return (
        <form className='mt-3 row w-75 mx-auto' role="form" aria-label="form" onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="s_repo" className="col-sm-3 col-form-label-lg"><i className="fa-solid fa-magnifying-glass"></i> Search User:</label>
                <div className="col-sm-7 input-group-lg my-auto">
                    <input type="text" className="form-control" id="s_repo" placeholder='Github username' onChange={handleSearchTerm} />

                </div>
                <div className="col-sm-1 align-self-end my-auto">
                    <button className="btn btn-dark folderIcon my-2"><i className="fa-solid fa-magnifying-glass-arrow-right"></i></button>
                </div>
            </div>
        </form>
    )
}
