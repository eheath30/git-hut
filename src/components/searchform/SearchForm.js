import React from 'react'

export default function SearchForm() {
    return (
        <form className='mt-3 row'>
            <div className="row">
                <label for="s_repo" class="col-sm-2 col-form-label">Search Repo:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="s_repo"/>
                </div>
            </div>
        </form>
    )
}
