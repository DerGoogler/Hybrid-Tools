declare global {
  interface Window {
    Android: any;
  }
}

class android {
  constructor() {
    console.log("Android JS Bridge statred");
  }

  public speakTTS(content: string) {
    window.Android.ttsSpeak(content);
  }

  public stopTTS() {
    window.Android.ttsStop();
  }

  public shutdownTTS() {
    window.Android.ttsShutdown();
  }

  public setPitchTTS(count: number) {
    window.Android.ttsSpeech(count);
  }

  public setSpeechTTS(count: number) {
    window.Android.ttsPitch(count);
  }

  public isSpeakingTTS() {
    return window.Android.isSpeaking();
  }
  public makeToast(content: string) {
    window.Android.showMessage(content);
  }
}

export default android;
