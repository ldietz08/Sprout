import React from "react";
import Main from "./components/Main";

export default function Index(props) {
  const errorDivs =
    props.messages.errors &&
    props.messages.errors.map((el, i) => (
      <div key={i} className="alert alert-danger">
        {el.msg}
      </div>
    ));
  return (
    <>
      <Main>
        <main class="container">
          <div class="row justify-content-center">
            <section class="col-6 mt-5">
              {errorDivs}
              {props.messages.info
                ? props.messages.info.map((el, i) => {
                    <div key={i} className="alert alert-danger">
                      {el.msg}
                    </div>;
                  })
                : null}
              <form action="/login" method="POST">
                <h1>Login</h1>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                  />
                </div>
                <div class="pb-2">
                  <span>
                    Not a member?
                    <a href="/signup">Signup now</a>
                  </span>
                </div>
                <button type="submit" class="btn btn-outline-success">
                  Submit
                </button>
              </form>
            </section>
          </div>
        </main>
      </Main>
    </>
  );
}
