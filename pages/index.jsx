import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./index.module.css";
import assets from "../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.containerLand}>
        <div className={style.landBase}>
          <div className={style.landLeft}>
            <div className={style.leftHead}>
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
            <div className={style.leftBody}>
              <div className="pt-5">
                <div className={style.bodyBase}>
                  <div className={style.bodyMain}>
                    <div>
                      <p className={style.bannerText}>
                        Discover Recipe & Delicious Food
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={style.searchButton}
                        onClick={() => router.push("/home/search")}
                      >
                        <p className={style.searchText}>Search</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.landRight}>
            <div className={style.rightHead}>
              <div className="pt-4">
                <div className={style.headBase2}>
                  <div className={style.headMain2}>
                    <div className="pt-3">
                      <Image
                        className={style.iconImg}
                        src={assets.logoIconLogin}
                        alt="Icon Login"
                      />
                    </div>
                    <div className="pt-4">
                      <p
                        type="button"
                        className={style.homeText2}
                        onClick={() => router.push("/auth/login")}
                      >
                        Login
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className={style.landingBanner}
                  src={assets.landingBanner}
                  alt="Landing Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerPop}>
        <div>
          <Image className={style.popBase} src={assets.foodItem} alt="" />
        </div>
      </div>
      <div className={style.containerRecipe}>
        <div className={style.recipeBase}>
          <div className="pt-5">
            <div className={style.recipeMain}>
              <div>
                <p className={style.recipesText}>Recipes</p>
              </div>
              <div className={style.recipeList}>
                <div type="button" className={style.recipeCard}>
                  <Image
                    id="recipe"
                    className={style.recipeImg}
                    src={assets.logoIconLogin}
                    alt=""
                  />
                  <label className={style.recipeText} htmlFor="recipe">
                    Es Campur
                  </label>
                </div>
              </div>
            </div>
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
  );
};

export default Home;
