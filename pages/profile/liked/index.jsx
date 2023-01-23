/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import style from "./liked.module.css";
import assets from "../../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      token: token,
    },
  };
};

const Liked = ({ token }) => {
  const router = useRouter();

  const [liked, setLiked] = useState([]);
  const [profile, setProfile] = useState([]);

  const user = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(token, "token bang");

  useEffect(() => {
    const getProfile = async () => {
      try {
        let result = await axios.get(`${process.env.HOST}/users`, {
          ...user,
        });
        setProfile(result.data.data);
        console.log(profile);
      } catch (error) {
        console.log(error);
      }
    };

    const getLiked = async () => {
      try {
        let result = await axios.get(`${process.env.HOST}/recipes/liked/`, {
          ...user,
        });
        setLiked(result.data.data);
        console.log(liked);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile(), getLiked();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.containerProfile}>
        <div className={style.profileHead}>
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
        <div className={style.profileBase}>
          <div className={style.profileMain}>
            {profile ? (
              profile.map((item) => (
                <div className={style.imgBase}>
                  <div className={style.imgMain}>
                    <div>
                      <Image
                        className={style.profileImg}
                        src={item.photo}
                        width={160}
                        height={160}
                        alt=""
                      />
                    </div>
                    <div>
                      <Image
                        type="button"
                        className={style.editImg}
                        src={assets.logoEdit}
                        alt=""
                        onClick={() => router.push("/profile/edit")}
                      />
                    </div>
                  </div>
                  <div>
                    <p className={style.profileLabel}>{item.name}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h3>Loading</h3>
              </div>
            )}
            <div>
              <div className="nav nav-tabs">
                <li className="nav-item">
                  <a href="/profile" className="nav-link">
                    All items
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/profile/saved" className="nav-link">
                    Saved
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/profile/liked"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Liked
                  </a>
                </li>
              </div>
            </div>
            <div className={style.containerRecipe}>
              <div className={style.recipeBase}>
                <div className="pt-5">
                  <div className={style.recipeMain}>
                    <div className={style.recipeList}>
                      {liked ? (
                        liked.map((item) => (
                          <div
                            type="button"
                            className={style.recipeCard}
                            onClick={() =>
                              router.push(`/profile/recipe/${item.id_recipes}`)
                            }
                          >
                            <Image
                              id="recipe"
                              className={style.recipeImg}
                              src={item.photo}
                              height={150}
                              width={150}
                              alt=""
                            />
                            <label
                              className={style.recipeText}
                              htmlFor="recipe"
                            >
                              {item.recipes_name}
                            </label>
                          </div>
                        ))
                      ) : (
                        <>
                          <div>
                            <h3>Loading</h3>
                          </div>
                        </>
                      )}
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
    </div>
  );
};

export default Liked;
