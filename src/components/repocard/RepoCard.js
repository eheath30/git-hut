import React, { useState } from "react";

export default function RepoCard({ repo }) {
  const [r, setR] = useState(repo);

  let createDate = r.created_at.slice(0, 10);
  let updateDate = r.updated_at.slice(0, 10);

  return (
    <section className="card text-center mb-3 border-success px-0 shadow-sm">
      <div className="card-header">
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex">
            <i className="fa-solid fa-star my-auto mx-1"></i>
            <h5 className="my-auto mx-1">Stargazers: {r.stargazers_count}</h5>
          </div>
          <div className="d-flex">Size: {r.size}kb</div>
          <div className="d-flex">
            <div className="d-flex mx-1">
              <h5 className="my-auto mx-1 my-auto">{r.open_issues}</h5>
              <i className="fa-solid fa-triangle-exclamation my-auto"></i>
            </div>
            <div className="d-flex mx-1">
              <h5 className="my-auto mx-1 my-auto">{r.watchers_count}</h5>
              <i className="fa-solid fa-eye my-auto"></i>
            </div>
            <div className="d-flex mx-1">
              <h5 className="my-auto mx-1 my-auto">{r.forks_count}</h5>
              <i className="fa-solid fa-code-fork my-auto"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{r.name}</h5>
        <p className="card-text">
          {r.description ||
            "Alt description is here to save the day because the repo owner is lazy."}
        </p>
        <p className="card-text my-1">Primary language: {r.language || <i className="fa-solid fa-xmark"></i>}</p>
        <p className="card-text">Default branch: {r.default_branch} <i className="fa-solid fa-code-branch"></i></p>

        <div className="d-flex justify-content-around">
          <a href={r.html_url} target="_blank" className="btn btn-sm btn-dark">
            <i className="fa-brands fa-square-github"></i> Go to repo
          </a>
        </div>
      </div>
      <div className="card-footer text-muted">
        <div className="d-flex justify-content-around">
          <span>Created at: {createDate.split('-').reverse().join('/')}</span>
          <span>Last Updated: {updateDate.split('-').reverse().join('/')}</span>
        </div>
      </div>
    </section>
  );
}
