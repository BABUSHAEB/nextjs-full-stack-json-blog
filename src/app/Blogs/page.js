import BlogsCard from "../Components/BlogsCard";

export async function getBlogs() {
  let res = await fetch(`http://localhost:3000/api/Blogs`, {
    next: { revalidate: 10 },
  });
  await new Promise((res) => setTimeout(res, 10000));

  let results = await res.json();
  // console.log(results, "data");
  return results;
}

export default async function Page() {
  let AllBlogs = await getBlogs();

  return (
    <div className="justify-between px-4 mx-auto lg:max-w-7xl max-w-[1920px] xl:px-[100px] md:items-center md:flex md:px-8items-center">
      <BlogsCard AllBlogs={AllBlogs} />
    </div>
  );
}
