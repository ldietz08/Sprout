import React from "react";
import Main from "./components/Main";

export default function Profile(props) {
  return (
    <>
      <Main>
        <div className="">
          <div className="d-flex justify-content-between align-items-center bg-light text-white p-3">
            <a className="btn btn-outline-success" href="/feed">
              Return to Feed
            </a>
            <h2 className="text-center lead fs-3 text-dark text-uppercase border p-3">
              My Posts
            </h2>
            <h1 className="text-center text-dark blockquote fw-light">
              <strong>Welcome back:</strong>
              {props.user.userName}
            </h1>
          </div>
          <div className="container mt-5">
            <div className="col-md-6">
              <ul className="row list-unstyled">
                {props.posts.map((post) => (
                  <li className="col-9 justify-content-between mt-5">
                    <a href={`/post/${post._id}`}>
                      <img className="img-fluid" src={post.image} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
