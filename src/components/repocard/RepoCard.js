import React, { useState } from 'react'

export default function RepoCard({repo}) {
const [r, setR] = useState(repo)
console.log(r)
    return (
        <div className="col mb-2">
            <div className="card shadow border-success">
                <div className="card-body">
                    {r.name}
                </div>
            </div>
        </div>
    )
}
