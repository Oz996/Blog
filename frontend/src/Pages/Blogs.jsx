import { Link } from "react-router-dom";
import Loader from "../utils/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../hooks/usePosts";

const Blogs = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  // const getPosts = async () => {
  //   const res = await axios.get("https://blogs-api-821q.onrender.com/posts");
  //   setPosts(res.data);
  // };

  // useEffect(() => {
  //   getPosts();
  // });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="container d-flex flex-column mb-3 w-50">
      <h1 className="my-5 text-center">Latest Blogs</h1>

      {data?.map((post) => (
        <Link
          to={`/blogs/${post._id}`}
          className="text-decoration-none text-dark"
          key={post._id}
        >
          <div
            style={{
              boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
              alignItems: "center",
            }}
            className="border rounded-3 p-3 my-3 w-"
          >
            <h3>{post.title}</h3>
            {post.body.length > 80 ? (
              <p className="my-3 fs-5">{post.body.substring(0, 80)}...</p>
            ) : (
              <p className="my-3 fs-5">{post.body}</p>
            )}
            <h6>{`By: ${post.user.email}`}</h6>
            <p>{`Created at: ${post.createdAt}`}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blogs;
