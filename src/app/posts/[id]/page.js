import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/post");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  console.log(ids);
  return ids;
  //   return [{ id: "1" }, { id: "2" }];
}

const DetailPage = async ({ params }) => {
  // console.log(params);
  const res = await fetch(`http://localhost:5000/post/${params.id}`);
  const post = await res.json();
  console.log(post);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl my-12">Post details page:</h2>
      <div key={post.id} className="card bg-gray-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <h2 className="">Like Counts: {post.likes_count}</h2>
          <p>{post.description}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              {" "}
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
