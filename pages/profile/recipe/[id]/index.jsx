/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import style from "./recipe.module.css";
import assets from "../../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

export async function getServerSideProps(context) {
  try {
    const { token } = context.req.cookies;

    const id = context.params.id;
    console.log(id);
    const result = await axios.get(`${process.env.HOST}/recipes/detail/${id}`);
    const data = result.data.data[0];
    console.log(data);

    console.log(id);
    if (!token) {
      return {
        props: {
          data,
          isLogin: false,
        },
      };
    }

    return {
      props: {
        isLogin: true,
        token,
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
}

const RecipeId = ({ isLogin, data, token }) => {
  const router = useRouter();

  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState([]);
  console.log(comments);
  useEffect(() => {
    const fetchComment = async () => {
      const result = await axios.get(
        `${process.env.HOST}/recipes/comments/${data.id_recipes}`
      );
      setComments(result.data.data);
    };

    fetchComment();
  }, []);

  const handleSave = async (id_recipes) => {
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = { id_resep: `${id_recipes}` };

      console.log(id_recipes, "id resep");
      await axios.post(
        `${process.env.HOST}/recipes/save/`,
        bodyParameters,
        header
      );

      Swal.fire("success", "Anda Berhasil Bookmark Recipes", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id_recipes) => {
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const bodyParameters = { id_resep: `${id_recipes}` };

      console.log(id_recipes, "id resep");
      await axios.post(
        `${process.env.HOST}/recipes/liked/`,
        bodyParameters,
        header
      );

      Swal.fire("success", "Anda Berhasil Like Recipes", "success");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setPostComment({
      ...postComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.post(
        `${process.env.HOST}/recipes/comments/${data.id_recipes}`,
        postComment,
        header
      );

      Swal.fire("Success", "Post Comment Success", "success");
    } catch (err) {
      Swal.fire("Warning", "Post Comment Failed", "error");
    }
  };

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
              <p className={style.titleText}>{data.recipes_name}</p>
            </div>
            <div className={style.imgBase}>
              <Image className={data.photo} src={assets.landingBanner} alt="" />
            </div>
            <div className="d-flex flex-row gap-3">
              <div>
                <button onClick={() => handleSave(data.id_recipes)}>
                  Saved
                </button>
              </div>
              <div>
                <button onClick={() => handleLike(data.id_recipes)}>
                  Liked
                </button>
              </div>
            </div>
            <div>
              <p className={style.ingredientsText}>Ingredients</p>
            </div>
            <div className={style.ingredientsInfo}>{data.description}</div>
            <div>
              <p className={style.videoText}>Video Step</p>
            </div>
            <div>
              <video width="100%" controls>
                <source src={data.video} type="video/mp4" />
              </video>
            </div>
            <div className={style.buttonBase}>
              <button type="button" className={style.buttonMain}>
                Edit
              </button>
            </div>
            <div>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Comments"
                onChange={handleChange}
              />
            </div>
            <div className={style.buttonBase}>
              <button
                type="button"
                className={style.buttonMain}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
            <div>
              <p className={style.commentText}>Comments</p>
            </div>
            <div className={style.commentBase}>
              {comments ? (
                comments.map((item) => (
                  <div className={style.commentMain}>
                    <div>
                      <Image
                        className={style.commentImg}
                        src={assets.logoIconLogin}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column gap-1 pt-2">
                      <p className={style.commentName}>{item.name}</p>
                      <p className={style.commentVal}>{item.comments}</p>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
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

export default RecipeId;
