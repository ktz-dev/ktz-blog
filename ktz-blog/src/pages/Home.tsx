import PostListItem from "../components/Home/PostListItem";
import PostList from "../components/Home/PostList";
import FeaturedPost from "../components/Home/FeaturedPost";

function Home() {
  return (
    <>
      <p className="w-full text-center opacity-50">Hi, I'm Waled</p>
      <h1 className="w-full text-center text-xl">Welcome To My Blog</h1>
      <h2 className="mt-10 mb-2">Latest Post:</h2>
      <FeaturedPost>
        <h3 className="font-semibold text-xl mb-5">This Is An Example</h3>
        <p className="bg-gradient-to-b from-black to-transparent text-transparent bg-clip-text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
          justo ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Sed fringilla tristique scelerisque. Suspendisse nec
          porttitor nulla. Aliquam sit amet felis at eros eleifend tempor quis
          eu lacus. Aenean sem tortor, vehicula sed purus a, posuere laoreet
          odio. Mauris suscipit fringilla mauris, ut placerat est tincidunt at.
          Phasellus nibh justo, fringilla vitae rutrum a, rhoncus ut dolor.
          Curabitur sit amet enim dapibus, sollicitudin turpis vitae, placerat
          neque. Ut vestibulum metus at purus vestibulum, et vestibulum nisi
          ultrices. Proin vulputate congue lorem, vel pharetra lacus sodales
          eget. Nunc imperdiet, quam eu consectetur vulputate, turpis nulla
          efficitur nisl, vel commodo urna nisi sit amet ante. Fusce at
          ultricies felis. Pellentesque posuere quam urna. Aliquam aliquet
          condimentum odio vitae fermentum.
          <br />
          <br />
          Phasellus nunc metus, feugiat nec porttitor cursus, varius in erat.
          Quisque eu elit neque. Sed nunc lacus, venenatis quis blandit ac,
          sollicitudin vitae risus. Nulla nec tincidunt nisi, quis malesuada
          ligula. Duis justo velit, tincidunt malesuada dignissim quis, mollis
          finibus mauris. Duis sollicitudin faucibus erat, ut feugiat mauris
          ornare at. Vestibulum justo neque, lobortis eu diam id, molestie
          semper dolor. Cras mollis pellentesque massa, eu commodo nisl. Quisque
          tem
        </p>
      </FeaturedPost>

      <h2 className="mt-10 mb-2">All Post:</h2>
      <PostList>
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
        <PostListItem
          link="/post"
          title="This Is An Example"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac justo
        ipsum. Vestibulum quis rhoncus augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas."
        />
      </PostList>
    </>
  );
}

export default Home;
