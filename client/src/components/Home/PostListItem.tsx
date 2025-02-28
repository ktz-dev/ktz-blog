import { Link } from "react-router";

interface PostListItemProps {
  title: string;
  description: string;
  link: string;
}

function PostListItem(props: PostListItemProps) {
  const { link, title, description } = props;
  return (
    <Link to={link}>
      <li className="p-5 border-1 rounded-md hover:bg-black/[0.1] cursor-pointer shadow-md">
        <h2 className="mb-2 font-bold">{title}</h2>
        <p className="text-sm mb-2">{description}</p>
      </li>
    </Link>
  );
}

export default PostListItem;
