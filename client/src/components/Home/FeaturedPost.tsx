import { Link } from "react-router";

interface FeaturedPostProps {
  children: React.ReactNode;
}

function FeaturedPost(props: FeaturedPostProps) {
  const { children } = props;

  return (
    <div className="border-1 border-black rounded-md p-5 shadow-xl">
      <div>{children}</div>
      <Link to="/post">
        <button className="block py-3 mx-auto mt-5 cursor-pointer hover:bg-black/[0.2] rounded-md w-full">
          Read More
        </button>
      </Link>
    </div>
  );
}

export default FeaturedPost;
