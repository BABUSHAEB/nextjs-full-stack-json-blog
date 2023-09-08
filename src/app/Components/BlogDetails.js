export default function BlogDetails({ BlogDetailsData }) {
  return (
    <section className="text-gray-600 max-w-[1920px] body-font xl:px-[100px]">
      <div className="container px-8 py-24 mx-auto">
        <div className="flex flex-col  text-center w-full mb-12">
          <h1 className="text-[28px] text-left md:text-[46px] font-bold leading-relaxed md:leading-[3.25rem] mb-4 md:mb-9 text-gray-900">
            {BlogDetailsData?.heading}
          </h1>
          <span className="md:w-full  mx-auto text-justify  leading-relaxed text-base">
            {BlogDetailsData?.description?.split("#").map((str, index) => {
              return (
                <p key={index}>
                  {str.concat(". ")} <br />
                  <br />
                </p>
              );
            })}
          </span>
        </div>
      </div>
    </section>
  );
}
