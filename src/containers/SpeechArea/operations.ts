import { AnyAction } from "redux";
import { actions } from "./actions";

import { AppState } from "../../store";

import { ThunkAction } from "redux-thunk";

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

type RecognitionResult = {
  confidence: number;
  transcript: string;
};
const { webkitSpeechRecognition }: IWindow = <IWindow>window;
const SR = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SR();

recognition.lang = "ja-JP";

recognition.onend = () => {
  recognition.start();
};
recognition.onerror = (error: any) => {
  console.error(error);
  console.log("recognition reload");
};

export const recording = (): ThunkAction<
  void,
  AppState,
  undefined,
  AnyAction
> => {
  return (dispatch, getState) => {
    console.log("register");
    recognition.start();
    recognition.onresult = (event: { results: RecognitionResult[][] }) => {
      const lastResult = event.results[event.results.length - 1];
      if (!lastResult) {
        return;
      }

      dispatch(
        actions.updateValue(
          getState().speechArea.value + lastResult[0].transcript
        )
      );
    };
  };
};
