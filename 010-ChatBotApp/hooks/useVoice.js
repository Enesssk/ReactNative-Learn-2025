import Voice from "@react-native-voice/voice"
import { useEffect, useState } from 'react';

export default function useVoice() {
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(""); //recording result

  useEffect(() => {
    Voice.onSpeechStart = () => setRecording(true)
    Voice.onSpeechEnd = () => setRecording(false)
    Voice.onSpeechResults = (e) => {
      if(e.value && e.value.length > 0) {
        //result > 0
        const text = e.value[0]
        setResult(text)
      }
    }
    Voice.onSpeechError = (e) => console.log("recordingError", e)

    // Bileşen ekrandan kaldırıldığında dinlemeyi durduruyorum.
    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, []);

  const start = async () => {
    setRecording(true)
    try {
      await Voice.start("en-US")
    }catch (err) {
      console.log("recordingCatchError",err)
    }
  }

  const stop = async () => {
    try {
      await Voice.stop()
      setRecording(false)
      //fetch response for gpt.
    }catch (err) {
      console.log("recordingCatchError",err)
    }
  }

  //console.log("result",result)

  return {
    recording,
    result,
    start,
    stop,
  };
}