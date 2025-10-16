// components/FacebookEmbed.tsx
"use client";

export default function FacebookEmbed() {
  return (
    <div className="w-full flex justify-center">
      {/** biome-ignore lint/a11y/useIframeTitle: <explanation> */}
<iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0UpFBydNddA8ZQHcDmrWHnQuNHg3aUNprda5icefg5Q9fLWuS6r9yogVgGnHe2kDdl%26id%3D61555142585877&show_text=true&width=500"
        width="500"
        height="632"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}