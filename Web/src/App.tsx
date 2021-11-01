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
} from "react-onsenui";
import android from "./Android/android";
import string from "./config/strings";

class App extends React.Component {
  private Android = new android();

  public state = {
    ttsInput: "",
    pitch: 0,
    speech: 0,
  };

  private handleTtsInput = (e: any) => {
    this.setState({ ttsInput: e.target.value });
  };

  private adjustSound(title: string, message: string, callback: Function) {
    ons.notification.prompt({
      title: title,
      messageHTML: message,
      buttonLabel: "Yes",
      animation: "default",
      callback: function (count: number) {
        if (typeof callback == "function") {
          callback(count);
          console.log("Value has been set to " + count.toString());
        }
      },
    });
  }

  private handlePitchChange = () => {
    this.adjustSound(
      string.pitch,
      "Set here your " + string.pitch + " of voice (only between -5 and 5)",
      (count: number) => {
        this.setState({ pitch: count });
      }
    );
  };

  private handleSpeechChange = () => {
    this.adjustSound(
      string.speech,
      "Set here your " + string.speech + " of voice (only between -5 and 5)",
      (count: number) => {
        this.setState({ speech: count });
      }
    );
  };

  private handleSpeak = () => {
    if (
      this.state.ttsInput === "" ||
      this.state.ttsInput === undefined ||
      this.state.ttsInput === null
    ) {
      this.Android.makeToast(string.cant_speak);
    } else {
      this.Android.speakTTS(this.state.ttsInput);
      if (this.state.pitch === 0) {
        return;
      } else {
        this.Android.setPitchTTS(this.state.pitch);
      }
      if (this.state.speech === 0) {
        return;
      } else {
        this.Android.setSpeechTTS(this.state.speech);
      }
    }
  };

  private renderToolbar() {
    return (
      <Toolbar>
        <div className="center">{string.app_name}</div>
      </Toolbar>
    );
  }

  public render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Card>
          <h3>{string.enter_text}</h3>
          <textarea
            className="textarea"
            style={{ backgroundColor: "transparent", width: "100%" }}
            value={this.state.ttsInput}
            onChange={this.handleTtsInput}
            placeholder={string.placeholder}
            rows={5}
          ></textarea>
        </Card>
        <Card>
          <h3>{string.adjust_sound}</h3>
          <ListItem
            onClick={this.handlePitchChange}
            modifier="chevron"
            tappable
          >
            {string.pitch}
          </ListItem>
          <ListItem
            onClick={this.handleSpeechChange}
            modifier="chevron"
            tappable
          >
            {string.speech}
          </ListItem>
        </Card>
        <div style={{ margin: "8px" }}>
          <Button modifier="large" onClick={this.handleSpeak}>
            {string.speak}
          </Button>
          <div style={{ margin: "5px" }} />
          <Button
            modifier="large"
            onClick={() => {
              if (this.Android.isSpeakingTTS()) {
                this.Android.stopTTS();
              } else {
                this.Android.makeToast(string.audio_already_stopped);
              }
            }}
          >
            {string.stop}
          </Button>
        </div>
      </Page>
    );
  }
}

export default App;
