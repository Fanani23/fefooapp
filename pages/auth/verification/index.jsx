import React, { useState } from "react";
import style from "./verification.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const Verification = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    otp: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.HOST}/users/verif`, user);
      Swal.fire("Success", "Verifiaction success", "success");
      router.push("/auth/login");
    } catch (err) {
      console.log(user.email);
      if (err.response.data.message == "Email not found") {
        return Swal.fire("Warning", "Email not found", "error");
      } else {
        return Swal.fire("Warning", "Wrong verification token", "error");
      }
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
                  Log in into your exiting account
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleVerification}
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
                    <label htmlFor="otp">Otp</label>
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      placeholder="Otp"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className={style.authButton}
                      onClick={handleVerification}
                    >
                      Verification
                    </button>
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

export default Verification;
