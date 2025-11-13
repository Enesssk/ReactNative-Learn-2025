import apiClient from '../Client';
import { chatCompletionEndPoint, chatCreateImageEndpoint } from '../Endpoint';


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

export const createImageCall = async(prompt) => {
  try {
    const response = await apiClient.post(chatCreateImageEndpoint, {
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })
    //console.log("FULL IMAGE RESPONSE:", JSON.stringify(response.data, null, 2));

    //response => url
    const url = response.data.data?.[0].url
    //console.log("url", url)
    return url

  }catch (err) {
    console.log("createImageCall Error:", {
      status: err.response.status,
      message: err.message,
      response: err.response?.data,
      full: err.toJSON ? err.toJSON() : err,
    });  }
}