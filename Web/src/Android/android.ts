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
   * @param {String} content
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
   * @param {Number} count
   */
  ttsSpeech(count: number): void;

  /**
   * @Native
   * @param {Number} count
   */
  ttsPitch(count: number): void;

  /**
   * @Native
   */
  isSpeaking(): boolean;

  /**
   * @Native
   * @param {String} content
   */
  showMessage(content: string): void;

  /**
   * @Native
   * @param {String} password
   * @param {String} message
   */
  encryptAES(password: string, message: string): string;

  /**
   * @Native
   * @param {String} password
   * @param {String} message
   */
  decryptAES(password: string, message: string): string;

  /**
   * @Native
   * @param {String} link
   */
  open(link: string): void;

  /**
   * @Native
   * @param {String} content
   */
  copyToClipboard(content: string): void;
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

  /**
   * @Native Encode an text with an native method
   * @param {String} password
   * @param {String} message
   */
  public encodeAES(password: string, message: string): string {
    return window.Android.encryptAES(password, message);
  }

  /**
   * @Native Decode an text with an native method
   * @param {String} password
   * @param {String} message
   */
  public decodeAES(password: string, message: string): string {
    return window.Android.decryptAES(password, message);
  }
  /**
   * @Native Open an link external
   * @param {String} link
   */
  public open(link: string) {
    window.Android.open(link);
  }

  /**
   * @Native Copy an text to the clipboard
   * @param {String} content
   * @param {String} customToastText
   */
  public copyToClipboard(
    content: string,
    customToastText: string = "Copied to clipboard"
  ) {
    window.Android.copyToClipboard(content);
    window.Android.showMessage(customToastText);
  }
}

export default android;
