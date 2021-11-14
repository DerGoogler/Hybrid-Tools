import * as ons from "onsenui";
import * as React from "react";
import android from "./../Android/android";
import { Button, Card, Page } from "react-onsenui";
import string from "./../config/strings";

class TTS extends React.Component {
  private Android = new android();

  public state = {
    ttsInput: "",
    pitch: 0,
    speech: 0,
    isMenuOpen: false,
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
  public render() {
    return (
      <>
        <Card>
          <h3>{string.enter_text}</h3>
          <textarea
            className="textarea"
            style={string.textareaStyle}
            value={this.state.ttsInput}
            onChange={this.handleTtsInput}
            placeholder={string.placeholder}
            rows={5}
          ></textarea>
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
      </>
    );
  }
}

export default TTS;
