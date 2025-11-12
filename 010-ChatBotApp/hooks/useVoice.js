import Voice from "@react-native-voice/voice"
import { useEffect, useState } from 'react';
import { chatgptCall } from '../api/service/chatbotService';

export default function useVoice() {
  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState(""); //recording result
  const [messages, setMessages] = useState([
    {role: "system", content: "You are a helpful assistant."}
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
    const newMessages = [...messages, {role: "user", content: result}]
    setMessages(newMessages)
    setResult("")

    try {
      setIsLoading(true) //BEFORE APICALL
      const reply = await chatgptCall(newMessages)
      setMessages([...newMessages, {role: "assistant", content: reply}])
      setIsLoading(false)
    }catch (err) {
      console.error("chat error",err)
    } finally {
      //APİCALL CAME
      setIsLoading(false);
    }
  }

  const clearChat = () => {
    setMessages([]);
    setResult("")
  }

  //console.log("result",result)

  return {
    recording,
    result,
    messages,
    isLoading,
    start,
    stop,
    clearChat,
  };
}