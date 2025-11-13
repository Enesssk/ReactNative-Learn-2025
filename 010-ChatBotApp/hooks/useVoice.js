import Voice from "@react-native-voice/voice"
import { useEffect, useState } from 'react';
import { chatgptCall, createImageCall } from '../api/service/chatbotService';
import Tts from 'react-native-tts';

export default function useVoice() {
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(""); //recording result
  const [messages, setMessages] = useState([
    {role: "system", type: "text", content: "You are a helpful assistant."}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);


  // For TTS BUG.
  if (Tts.stop.length > 0) {
    const originalStop = Tts.stop.bind(Tts);
    Tts.stop = () => {
      try {
        return originalStop(false);
      } catch (e) {
        console.warn("TTS stop error (handled):", e.message);
        return Promise.resolve();
      }
    };
  }

  useEffect(() => {
    clearChat()
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
    Tts.stop()
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
      handleSend()
    }catch (err) {
      console.log("recordingCatchError",err)
    }
  }

  const handleSend = async () => {
    if(!result.trim()) return //if result = "" => return.
    const newMessages = [...messages, {role: "user", type: "text", content: result}]
    setMessages(newMessages)
    setResult("")

    try {
      setIsLoading(true) //BEFORE APICALL
      //i ile arama yapıyorum bu kelimeler var mı?
      const wantsImage = /(draw|create|generate|show me|picture|image|photo|resim|çiz|görsel|oluştur)/i;
      if(wantsImage.test(result)) {
        const url = await createImageCall(result)
        //console.log("url", url)
        setMessages([...newMessages, {role: "assistant", type: "image", content: url}])
      }else {
        const reply = await chatgptCall(newMessages)
        setMessages([...newMessages, {role: "assistant", type: "text",  content: reply}])
        startTTS(reply)
      }
    }catch (err) {
      console.error("chat error",err)
    } finally {
      //APİCALL CAME
      setIsLoading(false);
    }
  }

  const startTTS = (message) => {
    setSpeaking(true)
      Tts.speak(message,{
        iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        rate: 0.5,
      });
  }

  const stopSpeaking = () => {
    Tts.stop()
    setSpeaking(false)
  }

  const clearChat = () => {
    setMessages([]);
    setResult("")
    Tts.stop()
  }

  //console.log("result",result)

  return {
    recording,
    result,
    messages,
    isLoading,
    speaking,
    start,
    stop,
    clearChat,
    stopSpeaking,
  };
}