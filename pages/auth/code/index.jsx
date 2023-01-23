import React from "react";
import style from "./code.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Code = () => {
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
                <form className={style.rightForm} action="">
                  <div>
                    <label className={style.labelText} htmlFor="code">
                      Code 6 digit
                    </label>
                    <input
                      type="text"
                      name="code"
                      id="code"
                      placeholder="Code"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <button type="button" className={style.authButton}>
                      Reset
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

export default Code;
