"use server";

import BlogDetails from "../../Components/BlogDetails";

export async function getBlogDetails({ blogPostSlug }) {
  // console.log(blogPostSlug, "getBlog Details");
  try {
    let res = await fetch(`http://localhost:3000/api/Blogs/${blogPostSlug}`);

    let results = await res.json();

    return results;
  } catch (error) {
    return error;
  }
}

export default async function Page({ params }) {
  let { blogPostSlug } = params;

  let res = await getBlogDetails({ blogPostSlug });

  let BlogDetailsData = JSON.parse(res);

  return (
    <section>
      <BlogDetails BlogDetailsData={BlogDetailsData} />
    </section>
  );
}
