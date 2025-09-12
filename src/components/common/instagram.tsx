"use client";
import { useEffect, useState } from "react";

type InstaPost = {
    id: string;
    caption?: string;
    media_url: string;
    permalink: string;
    timestamp: string;
};

export default function InstagramFeed() {
    const [posts, setPosts] = useState<InstaPost[]>([]);

    useEffect(() => {
    fetch("/api/instagram")
        .then((res) => res.json())
        .then((data) => {
        if (data?.data) setPosts(data.data);
        });
    }, []);

    return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
        <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
        <img
            src={post.media_url}
            alt={post.caption || "Instagram post"}
            className="rounded-lg shadow"
        />
        </a>
    ))}
    </div>
    );
}
