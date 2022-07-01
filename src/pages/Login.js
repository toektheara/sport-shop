import React from "react";
import axios_instance from "../libs/axiosInstance";
function Login() {
  
  const onHandleLogin = async (e) => {
    e.preventDefault();
    const x = e.target;

    const input = {
      email: x.email.value,
      password: x.password.value,
    };

    try {
      const res = await axios_instance.post('/audienceLogin', {
          ...input
      })

      localStorage.setItem('token', res.data.token)

      window.location.replace('/')
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid navbar-login">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul>
                <li>
                  <a href="/" id="list">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="About" id="list">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="Category" id="list">
                    T-SHIRT
                  </a>
                </li>
                <li>
                  <a href="cake" id="list">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="Login" id="list">
                    LOGIN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="form">
        <div className="img-block">
          <img src="picture/kitluy.jfif" />
        </div>
        <div className="form-block">
          <form className="form-controll" onSubmit={onHandleLogin}>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="User email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="User password"
                name="password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
