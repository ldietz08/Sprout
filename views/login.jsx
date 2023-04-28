import React from "react";
import Main from "./components/Main";

export default function Login(props) {
  return (
    <>
      <Main>
        <main className="container">
          <div className="row justify-content-center">
            <section className="col-6 mt-5">
              {props.messages.errors &&
                props.messages.errors.map((el, i) => (
                  <div key={i} className="alert alert-danger">
                    {el.msg}
                  </div>
                ))}
              {props.messages.info
                ? props.messages.info.map((el, i) => {
                    <div key={i} className="alert alert-danger">
                      {el.msg}
                    </div>;
                  })
                : null}
              <form action="/login" method="POST">
                <h1>Login</h1>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                  />
                </div>
                <div className="pb-2">
                  <span>
                    Not a member?
                    <a href="/signup">Signup now</a>
                  </span>
                </div>
                <button type="submit" className="btn btn-outline-success">
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
