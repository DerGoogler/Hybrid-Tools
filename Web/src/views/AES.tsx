import * as ons from "onsenui";
import * as React from "react";
import android from "./../Android/android";
import { Button, Card, Page } from "react-onsenui";
import string from "./../config/strings";

class AES extends React.Component {
  private Android = new android();

  public state = {
    aesInput: "",
    aesPwdInput: "",
    output: "",
  };

  private outputSet = (value: string) => {
    this.setState({ output: value });
  };

  private handleAesInput = (e: any) => {
    this.setState({ aesInput: e.target.value });
  };

  private handleAesPwdInput = (e: any) => {
    this.setState({ aesPwdInput: e.target.value });
  };

  private handleEncode = () => {
    if (this.state.aesInput === null || this.state.aesInput === "") {
      this.Android.makeToast("Please fill up the textarea!");
    } else if (
      this.state.aesPwdInput === null ||
      this.state.aesPwdInput === ""
    ) {
      this.Android.makeToast("Please give an password!");
    } else {
      this.outputSet(
        this.Android.encodeAES(this.state.aesPwdInput, this.state.aesInput)
      );
    }
  };

  private handleDecode = () => {
    if (this.state.aesInput === null || this.state.aesInput === "") {
      this.Android.makeToast("Please fill up the textarea!");
    } else if (
      this.state.aesPwdInput === null ||
      this.state.aesPwdInput === ""
    ) {
      this.Android.makeToast("Please give an password!");
    } else {
      this.outputSet(
        this.Android.decodeAES(this.state.aesPwdInput, this.state.aesInput)
      );
    }
  };

  private handleCopy = () => {
    this.Android.copyToClipboard(this.state.output);
  };

  public render() {
    return (
      <>
        <Card>
          <h3>{string.enter_text}</h3>
          <textarea
            className="textarea"
            style={string.textareaStyle}
            value={this.state.aesInput}
            onChange={this.handleAesInput}
            placeholder={string.placeholder}
            rows={5}
          ></textarea>
          <div style={{ marginTop: "8px" }}></div>
          <textarea
            className="textarea"
            style={string.textareaStyle}
            value={this.state.aesPwdInput}
            onChange={this.handleAesPwdInput}
            placeholder="Password"
            rows={1}
          ></textarea>
        </Card>
        <div style={{ margin: "8px" }}>
          <Button modifier="large" onClick={this.handleEncode}>
            Encode
          </Button>
          <div style={{ margin: "5px" }} />
          <Button modifier="large" onClick={this.handleDecode}>
            Decode
          </Button>
          <div style={{ margin: "5px" }} />
          <Button modifier="large" onClick={this.handleCopy}>
            Copy
          </Button>
        </div>
        <Card>
          <div className="title">Output</div>
          <div className="content">{this.state.output}</div>
        </Card>
      </>
    );
  }
}

export default AES;
