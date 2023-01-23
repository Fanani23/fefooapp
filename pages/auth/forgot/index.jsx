import React from "react";
import style from "./forgot.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Forgot = () => {
  const router = useRouter();

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
                <p className={style.welcomeText}>Forgot Password?</p>
              </div>
              <div>
                <p className={style.welcomeInfo}>
                  We just need your registered e-mail address to send your
                  password resend
                </p>
              </div>
              <div>
                <form className={style.rightForm} action="">
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
                    />
                  </div>
                  <div>
                    <button type="button" className={style.authButton}>
                      Send
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

export default Forgot;
