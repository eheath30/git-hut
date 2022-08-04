import React, { useState, useEffect } from 'react'

export default function UserCard({ userInfo }) {
  const [user, setUser] = useState(userInfo)

  return (
    <>
      <div className="card">
        <img src={user.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user.name === null ? user.login : user.name}</h5>
          <h6 className="card-title">ID: {user.id}</h6>
          <p className="card-text">following: {user.following} <br /> followers: {user.followers} </p>
          <a href={user.html_url} target="_blank" className="btn btn-warning"><i className="fa-brands fa-github"></i> {user.name === null ? user.login : user.name}</a>
        </div>
      </div>
    </>
  )
}
