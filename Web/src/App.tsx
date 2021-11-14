import * as ons from "onsenui";
import * as React from "react";
import {
  Toolbar,
  ToolbarButton,
  Icon,
  Page,
  Button,
  Card,
  List,
  ListItem,
  Splitter,
  SplitterContent,
  SplitterSide,
  ListHeader,
  Tab,
  Tabbar,
} from "react-onsenui";
import string from "./config/strings";
import MakeTab from "./misc/MakeTab";
import AES from "./views/AES";
import Drawer from "./views/Drawer";
import TTS from "./views/TTS";

class App extends React.Component {
  public state = {
    isMenuOpen: false,
  };

  public menuHide() {
    this.setState({ isMenuOpen: false });
  }

  public menuShow() {
    this.setState({ isMenuOpen: true });
  }

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={this.menuShow}>
            <Icon icon="md-menu" />
          </ToolbarButton>
        </div>
        <div className="center">{string.app_name}</div>
      </Toolbar>
    );
  }

  private renderMenuToolbar() {
    return (
      <Toolbar>
        <div className="center">{string.app_name}</div>
      </Toolbar>
    );
  }

  private renderTabs() {
    return [
      {
        content: <MakeTab content={<TTS />} />,
        tab: <Tab label="TTS" />,
      },
      {
        content: <MakeTab content={<AES />} />,
        tab: <Tab label="AES" />,
      },
    ];
  }

  public render() {
    return (
      <Splitter>
        <SplitterSide
          style={{
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          side="left"
          width={250}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isMenuOpen}
          onClose={this.menuHide.bind(this)}
          onOpen={this.menuShow.bind(this)}
        >
          <Page renderToolbar={this.renderMenuToolbar}>
            <Drawer />
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar}>
            <Tabbar
              swipeable={true}
              position="auto"
              index={0}
              renderTabs={this.renderTabs}
            />
          </Page>
        </SplitterContent>
      </Splitter>
    );
  }
}

export default App;
