import apiClient from '../Client';
import { chatCompletionEndPoint } from '../Endpoint';


export const chatgptCall = async(messages) => {
  try {
    const response = await apiClient.post(chatCompletionEndPoint, {
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: messages,
    })

    const text = response.data.choices[0].message.content.trim()
    console.log("text",text)
    return text
  }catch(err) {
    console.log("apicall",err)
  }
}