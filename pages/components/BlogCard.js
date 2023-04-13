import Link from "next/link";

function BlogCard({
  title,
  coverPhoto,
  datePublished,
  content,
  slug,
  description,
}) {
  return (
    <div className="bg-[#FAFAFB] mt-4 rounded-lg p-6 border drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)] dark:bg-[#363639] ">
      <Link href={"/posts/" + slug}>
        <div>
          <h2 className="">{title}</h2>
        </div>
      </Link>
      <div>
        <p className="">{description}</p>
      </div>
      <div className="bg-stone-100 w-[150px] rounded-[16px] p-1 px-4 flex mt-3 ">
        <p className="inline-block mr-auto ml-auto">{datePublished}</p>
      </div>
    </div>
  );
}

export default BlogCard;
