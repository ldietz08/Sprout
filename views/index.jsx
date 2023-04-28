import React from "react";
import Main from "./components/Main";

export default function Index() {
  return (
    <>
      <Main>
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
