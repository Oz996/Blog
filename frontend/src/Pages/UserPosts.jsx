import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [sameMail, setSameMail] = useState(false);

  const { id } = useParams();
  const { userEmail } = useAuth();

  const getUserPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:7700/users/posts/${id}`);
      setUserPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    const foundPost = userPosts.find((post) => post.user.email === userEmail);
    if (foundPost) {
      setSameMail(true);
    }
  }, [userPosts, userEmail]);

  console.log(userPosts);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Posts</h2>
      {sameMail ? (
        <>
          {userPosts.map((post) => (
            <div
              key={post._id}
              style={{
                boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
                width: "50rem",
              }}
              className="border rounded-3 p-3 my-3"
            >
              <h4>{post.title}</h4>
              <div className="buttons mt-3 d-flex gap-3">
                <Link
                  to={`/post/${post._id}`}
                  className="text-decoration-none text-dark"
                >
                  <button
                    className="btn btn-primary"
                    style={{ minWidth: "4.5rem" }}
                  >
                    Edit
                  </button>
                </Link>
                <Link
                  to={`/post/${post._id}`}
                  className="text-decoration-none text-dark"
                >
                  <button className="btn btn-danger">Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {userPosts.map((post) => (
            <Link
              to={`/view/${post._id}`}
              className="text-decoration-none text-dark"
              key={post._id}
            >
              <div
                style={{
                  boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
                  width: "50rem",
                }}
                className="border rounded-3 p-3 my-3"
              >
                <h4>{post.title}</h4>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default UserPosts;
