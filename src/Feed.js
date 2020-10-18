import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="farhanalfaa"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="farhanalfaa"
      />
    </div>
  );
}

export default Feed;
