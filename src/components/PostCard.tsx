import { PostMetadataType } from "@/utils/postUtils";
import Link from "next/link";
import { FC } from "react";

export interface PostMetadataProps {
    postMetadata: PostMetadataType
}

export const PostCard: FC<PostMetadataProps> = ({ postMetadata }) => {
    const { title, description, author, slug } = postMetadata;

    return (
        <Link href={`/blog/${slug}`}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Written by: {author}</p>
            </div>
        </Link>
    )
};