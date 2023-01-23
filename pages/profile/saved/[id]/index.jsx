import React from "react";
import style from "./savedid.module.css";
import assets from "../../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";

const SavedId = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.containerRecipe}>
        <div className={style.recipeHead}>
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
        <div className={style.idBase}>
          <div className={style.idMain}>
            <div>
              <p className={style.titleText}>Title Recipe</p>
            </div>
            <div className={style.imgBase}>
              <Image
                className={style.recipeImg}
                src={assets.landingBanner}
                alt=""
              />
            </div>
            <div>
              <p className={style.ingredientsText}>Ingredients</p>
            </div>
            <div className={style.ingredientsInfo}>
              - 2 eggs - 2 tbsp mayonnaise - 3 slices bread - a little butter -
              ⅓ carton of cress - 2-3 slices of tomato or a lettuce leaf and a
              slice of ham or cheese - crisps , to serve
            </div>
            <div>
              <p className={style.videoText}>Video Step</p>
            </div>
            <div>
              <video width="100%" controls>
                <source src="{data.video}" type="video/mp4" />
              </video>
            </div>
            <div>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Comments"
              />
            </div>
            <div className={style.buttonBase}>
              <button type="button" className={style.buttonMain}>
                Save
              </button>
            </div>
            <div>
              <p className={style.commentText}>Comments</p>
            </div>
            <div className={style.commentBase}>
              <div className={style.commentMain}>
                <div>
                  <Image
                    className={style.commentImg}
                    src={assets.logoIconLogin}
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column gap-1 pt-2">
                  <p className={style.commentName}>Adinda</p>
                  <p className={style.commentVal}>Yah bisa</p>
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
    </div>
  );
};

export default SavedId;
