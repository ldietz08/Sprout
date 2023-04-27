import React from "react";
import Main from "./components/Main";

export default function Index() {
  return (
    <>
      <Main>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container">
            <a href="/">
              <img src="../../assets/logo/logo.png" width="200" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav-menu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav-menu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a href="#about" class="nav-link"></a>
                </li>
                <li>
                  <a href="/login" class="m-2 btn btn-outline-success">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/signup" class="m-2 btn btn-outline-success">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="bg-dark">
          <section className="text-light text-center p-5">
            <div>
              <img
                src="../../assets/imgs/plant.jpg"
                alt="Watering the garden"
                className="img-fluid"
              />
            </div>
            <div className="p-2">
              <h2>
                Sprout, <br />a gardener's companion.
              </h2>
            </div>
            <span className="text-muted">
              Exercise your green thumb and share your journey with others!
            </span>
          </section>
        </main>
      </Main>
    </>
  );
}
