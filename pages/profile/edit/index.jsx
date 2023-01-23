import React, { useState } from "react";
import style from "./edit.module.css";
import assets from "../../../public/assets";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

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

const Edit = ({ token }) => {
  const router = useRouter();

  const [photo, setPhoto] = useState(null);

  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    axios
      .put(`${process.env.HOST}/users`, formData, user, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update photo succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update photo profile success", "success");
      })
      .catch((err) => {
        console.log("Update photo profile failed");
        console.log(err);
        Swal.fire("Warning", "Update photo profile failed", "error");
      });
  };

  return (
    <div className={style.container}>
      <div className={style.containerEdit}>
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
        <div className={style.addBase}>
          <div className={style.addMain}>
            <div className={style.imgBase}>
              <div className={style.imgMain}>
                <div className={style.addFile}>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    onChange={handlePhotoChange}
                  />
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
                      Add photo
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className={style.buttonBase}>
              <button
                type="button"
                className={style.buttonMain}
                onClick={handleEdit}
              >
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

export default Edit;
