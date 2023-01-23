import React, { useState } from "react";
import style from "./add.module.css";
import assets from "../../public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
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
  console.log(token, "token ssr");
  return {
    props: {
      isLogin: token ? true : false,
      token: token,
    },
  };
};

const Add = ({ token }) => {
  const router = useRouter();

  const [upload, setUpload] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState({});
  const [video, setVideo] = useState([]);
  const [description, setDescription] = useState("");

  const handleImage = (e) => {
    setPhoto({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleVideo = (e) => {
    setVideo({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleAdd = async () => {
    try {
      setUpload(true);
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("photo", photo.file);
      data.append("video", video.file);
      const user = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(user, "token");
      await axios.post(`${process.env.HOST}/recipes`, data, user);
      Swal.fire("Success", "Add Recipes Success", "success");
    } catch (err) {
      Swal.fire("Failed", "Add Recipes Fails", "error");
      console.log(err);
    }
  };

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
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    onChange={handleImage}
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
                      Add recipe
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Title"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                id="ingredients"
                cols="30"
                rows="10"
                placeholder="Ingredients"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={style.imgBase}>
              <div className={style.imgMain}>
                <div className={style.addFile}>
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    id="video"
                    onChange={handleVideo}
                  />
                </div>
                <div>
                  <label htmlFor="video">
                    <Image
                      type="button"
                      className={style.addImg}
                      src={assets.logoAdd}
                      alt=""
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="video">
                    <p type="button" className={style.addLabel}>
                      Add video
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className={style.buttonBase}>
              <button
                type="button"
                className={style.buttonMain}
                onClick={handleAdd}
              >
                Add
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

export default Add;
