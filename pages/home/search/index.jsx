import React from "react";
import style from "./search.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.searchHead}>
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
      <div className={style.containerSearch}>
        <div className={style.containerRecipe}>
          <div className={style.recipeBase}>
            <div className="pt-5">
              <div className={style.recipeMain}>
                <div>
                  <p className={style.recipesText}>Search Recipes</p>
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

export default Search;
