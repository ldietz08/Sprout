import React from "react";

export default function Main(props) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Sprout</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../../assets/imgs/favicon-32x32.png"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
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
          {props.children}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}
