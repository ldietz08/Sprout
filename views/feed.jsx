import React from "react";
import Main from "./components/Main";

export default function Feed(props) {
  return (
    <>
      <Main>
        <div class="container">
          <div class="row justify-content-center">
            <ul class="row list-unstyled">
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
      </Main>
    </>
  );
}
