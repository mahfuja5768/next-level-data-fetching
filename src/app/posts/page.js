import Link from "next/link";
import styles from "./Posts.module.css";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/post", {
    // cache: "force-cache",
    // next: {
    //   revalidate: 5,
    // },
    cache: "no-store",
  });
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="w-full container mx-auto my-12">
      <h2 className={styles.header_text}>Total posts: {posts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12">
        {posts.map((item) => (
          <div key={item.id} className="card bg-gray-700 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <h2 className="">Like Counts: {item.likes_count}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${item.id}`}>
                  {" "}
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
