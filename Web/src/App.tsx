import * as ons from "onsenui";
import * as React from "react";
import {
  Toolbar,
  ToolbarButton,
  Icon,
  Page,
  Button,
  Card,
  Input,
} from "react-onsenui";
import android from "./android";

class App extends React.Component {
  private Android = new android();

  public state = {
    ttsInput: "",
  };

  private handleTtsInput = (e: any) => {
    this.setState({ ttsInput: e.target.value });
  };

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Hybrid TTS</div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Card>
          <h3>Enter a text</h3>
          <textarea
            className="textarea"
            style={{ backgroundColor: "transparent", width: "100%" }}
            value={this.state.ttsInput}
            onChange={this.handleTtsInput}
            placeholder="Hello World!"
            rows={5}
          ></textarea>
        </Card>
        <div style={{ margin: "8px" }}>
          <Button
            modifier="large"
            onClick={() => {
              if (
                this.state.ttsInput === "" ||
                this.state.ttsInput === undefined ||
                this.state.ttsInput === null
              ) {
                this.Android.makeToast("Can't speak blank text");
              } else {
                this.Android.speakTTS(this.state.ttsInput);
              }
            }}
          >
            Speak
          </Button>
          <div style={{ margin: "5px" }} />
          <Button
            modifier="large"
            onClick={() => {
              if (this.Android.isSpeakingTTS()) {
                this.Android.stopTTS();
              } else {
                this.Android.makeToast("The audio is already stopped!");
              }
            }}
          >
            Stop
          </Button>
        </div>
      </Page>
    );
  }
}

export default App;
