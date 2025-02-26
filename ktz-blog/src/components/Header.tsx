import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <div className="flex justify-center w-full mb-5 bg-stone-100 dark:bg-stone-900">
      <div className="flex items-center justify-between w-full max-w-[1500px] px-10 py-3 border-b-1 border-b-stone-500/[0.3]">
        <p className="text-lg font-bold text-stone-900 dark:text-stone-100">
          ktz-blog
        </p>
        <a href="https://www.github.com/ktz-dev">
          <GitHubLogoIcon className="cursor-pointer size-6 text-stone-900 dark:text-stone-100" />
        </a>
      </div>
    </div>
  );
}

export default Header;
