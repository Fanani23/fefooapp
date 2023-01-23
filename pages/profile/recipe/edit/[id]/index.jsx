import React from "react";
import style from "./recedit.module.css";
import assets from "../../../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Recedit = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.containerAdd}>
        <div className={style.addHead}>
          <div className="pt-4">
            <div className={style.headBase}>
              <div className={style.headMain}>
                <div className="pt-3">
                  <p
                    type="button"
                    className={style.homeText}
                    onClick={() => router.push("/home")}
                  >
                    Home
                  </p>
                </div>
                <div className="pt-3">
                  <p
                    type="button"
                    className={style.addText}
                    onClick={() => router.push("/add")}
                  >
                    Add Recipe
                  </p>
                </div>
                <div className="pt-3">
                  <p
                    type="button"
                    className={style.profileText}
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.addBase}>
          <div className={style.addMain}>
            <div className={style.imgBase}>
              <div className={style.imgMain}>
                <div className={style.addFile}>
                  <input type="file" name="photo" id="photo" />
                </div>
                <div>
                  <label htmlFor="photo">
                    <Image
                      type="button"
                      className={style.addImg}
                      src={assets.logoAdd}
                      alt=""
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="photo">
                    <p type="button" className={style.addLabel}>
                      Add recipe
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Title"
                className="form-control"
              />
            </div>
            <div>
              <textarea
                name="ingredients"
                id="ingredients"
                cols="30"
                rows="10"
                placeholder="Ingredients"
                className="form-control"
              />
            </div>
            <div className={style.imgBase}>
              <div className={style.imgMain}>
                <div className={style.addFile}>
                  <input type="file" name="photo" id="photo" />
                </div>
                <div>
                  <label htmlFor="photo">
                    <Image
                      type="button"
                      className={style.addImg}
                      src={assets.logoAdd}
                      alt=""
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="photo">
                    <p type="button" className={style.addLabel}>
                      Add video
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className={style.buttonBase}>
              <button type="button" className={style.buttonMain}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className={style.containerFoot}>
          <div className="pt-5">
            <div className={style.footBase}>
              <div className="pt-3">
                <div className={style.footMain}>
                  <div className={style.footOne}>
                    <p className={style.oneOne}>Eat, Cook, Repeat</p>
                    <p className={style.oneTwo}>
                      Share your best recipe by uploading here !
                    </p>
                  </div>
                  <div>
                    <p className={style.footTwo}>
                      Product Company Learn more Get in touch{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recedit;
