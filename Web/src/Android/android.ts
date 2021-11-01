declare global {
  /**
   * A window containing a DOM document; the document property points to the DOM document loaded in that window.
   */
  interface Window {
    /**
     * Declare the custom window event (`Android`) for the WebView
     */
    Android: Android;
  }
}

interface Android {
  /**
   * @Native
   * @param content String
   */
  ttsSpeak(content: string): void;

  /**
   * @Native
   */
  ttsStop(): void;

  /**
   * @Native
   */
  ttsShutdown(): void;

  /**
   * @Native
   * @param count Number
   */
  ttsSpeech(count: number): void;

  /**
   * @Native
   * @param count Number
   */
  ttsPitch(count: number): void;

  /**
   * @Native
   */
  isSpeaking(): boolean;

  /**
   * @Native
   * @param content String
   */
  showMessage(content: string): void;
}

class android {
  /**
   * Builds the basic constructor
   */
  public constructor() {
    console.log("Android JS Bridge statred");
  }

  /**
   * @Native Make an Android Text to speech
   * @param content Speaks the value
   */
  public speakTTS(content: string): void {
    window.Android.ttsSpeak(content);
  }

  /**
   * @Native Stops the text to speech
   */
  public stopTTS(): void {
    window.Android.ttsStop();
  }

  /**
   * @Native Shutdowns the text to speech
   */
  public shutdownTTS(): void {
    window.Android.ttsShutdown();
  }

  /**
   * @Native Set an custom pitch for text to speech
   * @param count Example: 5 (And only numbers)
   */
  public setPitchTTS(count: number): void {
    window.Android.ttsSpeech(count);
  }

  /**
   * @Native Sets an custom speech rate fot text to speech
   * @param count Example: 6 (And only numbers)
   */
  public setSpeechTTS(count: number): void {
    window.Android.ttsPitch(count);
  }

  /**
   * @Native Checks if the text to speech is speaking
   * @returns boolean (`true` or `false`)
   */
  public isSpeakingTTS(): boolean {
    return window.Android.isSpeaking();
  }

  /**
   * @Native Makes an native Android toast
   * @param content toast value / content
   */
  public makeToast(content: string): void {
    window.Android.showMessage(content);
  }
}

export default android;
