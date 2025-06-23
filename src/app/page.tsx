import { PostCard } from "@/components/PostCard";
import { getPostMetadata } from "@/utils/postUtils";

export default function Home() {
  return (
    <main>
      <div>
        {getPostMetadata('posts').map((post, postIndex) => {
          return (
            <PostCard key={postIndex} postMetadata={post}></PostCard>
          )
        })}
      </div>
    </main>
  );
}
