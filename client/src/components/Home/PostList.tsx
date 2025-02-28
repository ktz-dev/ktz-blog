interface PostListProps {
  children: React.ReactNode;
}

function PostList(props: PostListProps) {
  const { children } = props;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {children}
    </ul>
  );
}

export default PostList;
