import React from "react";
import "./Widgets.css";
import Sponsor from "./Sponsor";
import SidebarRow from "./SidebarRow";
import { IconButton } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget__top">
        <h2>Sponsor</h2>
        <div className="widget__sponsor">
          <Sponsor
            image="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
            title="Hactiv8 Remote Class"
            urlLink="hactiv8.com"
          />
          <Sponsor
            image="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
            title="Hactiv8 Remote Class"
            urlLink="hactiv8.com"
          />
        </div>
      </div>
      <div className="widget__bottom">
        <h2>Contact</h2>
        <div className="widget__icon"></div>
        <IconButton>
          <VideocamIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="widget__contact">
        <SidebarRow
          src="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
          title="Farhan Alfariqi"
        />
        <SidebarRow
          src="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
          title="Farhan Alfariqi"
        />
        <SidebarRow
          src="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
          title="Farhan Alfariqi"
        />
        <SidebarRow
          src="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
          title="Farhan Alfariqi"
        />
        <SidebarRow
          src="https://avatars0.githubusercontent.com/u/39804476?s=460&u=aa4fabc630b2a28e4e0b6cc0427cf561c805902f&v=4"
          title="Farhan Alfariqi"
        />
      </div>
    </div>
  );
}

export default Widgets;
