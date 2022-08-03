import React, { useEffect, useState } from "react";



export default function SearchForm() {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchTerm(e) {
        let userName = e.target.value;

        // useEffect(() => {
        //     dispatch(getUser("eheath30"));
        // }, []);

        setSearchTerm(userName);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(getUser(searchTerm));
    // };


    return (
        <form className='mt-3 row w-75 mx-auto' role="form" aria-label="form">
            <div className="row">
                <label htmlFor="s_repo" className="col-sm-2 col-form-label">Search Repo:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="s_repo" placeholder='Github username' onChange={handleSearchTerm} />
                </div>
            </div>
        </form>
    )
}
