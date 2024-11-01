import React from "react";
import VideoPlayer from "../utils/VideoPlayer";

export default function VideoHeader() {
  return (
    <>
      <div className=" w-full h-screen bg-[var(--white)] flex items-center justify-center ">
        <h1>Ma vidéo YouTube</h1>
        <VideoPlayer videoId="lNDesSlZQSo?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fpolypus.mg&widgetid=1" />{" "}
      </div>
    </>
  );
}
