import * as React from "react";
import { List, ListItem, ListHeader } from "react-onsenui";
import android from "../Android/android";
import string from "./../config/strings";

class Drawer extends React.Component {
  private Android = new android();

  public render() {
    return (
      <>
        <List>
          <ListHeader>{string.github}</ListHeader>
          <ListItem
            onClick={() => {
              this.Android.open(
                "https://github.com/DerGoogler/Hybrid-TTS/issues/new"
              );
            }}
            modifier="chevron"
            tappable
          >
            {string.submit_issue}
          </ListItem>
        </List>
      </>
    );
  }
}

export default Drawer;
