import * as ons from "onsenui";
import * as React from "react";
import { Page } from "react-onsenui";
import string from "./../config/strings";

interface MakeTabProps {
  content: any;
}

class MakeTab extends React.Component<MakeTabProps> {
  public render() {
    return (
      <>
        <Page>
          <section>{this.props.content}</section>
        </Page>
      </>
    );
  }
}

export default MakeTab;
