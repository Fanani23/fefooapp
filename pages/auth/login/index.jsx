/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import style from "./login.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const config = {
        withCredentials: true,
      };
      const result = await axios.post(
        `${process.env.HOST}/users/login`,
        user,
        config
      );
      console.log(user);
      console.log(process.env.HOST);
      if (result.data.data.message === "Email not found") {
        Swal.fire(
          "Warning",
          "Email Not Found, Please check if your email are registered",
          "error"
        );
      } else if (result.data.data.message === "Wrong password") {
        Swal.fire("Warning", "Wrong Password", "error");
      } else {
        const token = result.data.data.token;
        const data = {
          token: token,
        };
        const cookie = await fetch("/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const checkToken = await cookie.json();
        if (!checkToken) {
          return Swal.fire("Warning", "Login failed", "error");
        }
        Swal.fire("Success", "Login success", "success");
        router.push("/home");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Warning", "Login failed", "error");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.containerAuth}>
        <div className={style.authLeft}>
          <Image
            className={style.authBanner}
            src={assets.logoBanner}
            alt="Banner"
          />
        </div>
        <div className={style.authRight}>
          <div className={style.rightBase}>
            <div className={style.rightVal}>
              <div>
                <p className={style.welcomeText}>Welcome</p>
              </div>
              <div>
                <p className={style.welcomeInfo}>
                  Log in into your exiting account
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleLogin}
                  className={style.rightForm}
                  action=""
                >
                  <div>
                    <label className={style.labelText} htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className={style.checkBox}>
                    <input type="checkbox" name="terms" id="terms" />
                    <p className={style.termsText}>
                      I agree to terms & conditions
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className={style.authButton}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p
                      type="button"
                      onClick={() => router.push("/auth/forgot")}
                      className={style.forgotText}
                    >
                      Forgot Password ?
                    </p>
                  </div>
                  <div className={style.accountText}>
                    <p>Don`t have an account?</p>
                    <p
                      type="button"
                      className={style.accountButton}
                      onClick={() => router.push("/auth/register")}
                    >
                      Sign up
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
