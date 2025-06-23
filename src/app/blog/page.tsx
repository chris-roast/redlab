import { PostCard } from "@/components/PostCard";
import { getPostMetadata } from "@/utils/postUtils";

export default function Blog() {
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