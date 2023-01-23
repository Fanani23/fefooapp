import React, { useState } from "react";
import style from "./register.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  console.log(user);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.HOST}/users/register`, user);
      Swal.fire("Success", "Register Success", "success");
      router.push("/auth/verification");
    } catch (err) {
      console.log(err);
      Swal.fire("Warning", "Register failed", "error");
    }
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
                  Create new account to access all features
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleRegister}
                  className={style.rightForm}
                  action=""
                >
                  <div>
                    <label className={style.labelText} htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
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
                    <label htmlFor="phonenumber">Phone</label>
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="Phone"
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
                      onClick={handleRegister}
                    >
                      Sign up
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
                    <p>Already have an account?</p>
                    <p
                      type="button"
                      className={style.accountButton}
                      onClick={() => router.push("/auth/login")}
                    >
                      Login
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

export default Register;
