let controller;
let messageAbort;
let signal;
export const useAjax = (requestId,overwatch=false) => {
console.log(controller,overwatch)
  messageAbort=''
  if (controller && overwatch) {
    controller.abort()
    messageAbort = `request from Send${requestId === 1 ? 'Again' : ''} button has terminated`;
  }
  controller = new AbortController();
  signal = controller.signal
  try {
    const data= fetch(`https://jsonplaceholder.typicode.com/todos/${requestId}`, {signal})
      .then(response => response.json())
      .then(json => ({data: json, message: messageAbort}));
       if(data){
         // controller = null;
       }
    return data
  }
  catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request aborted',signal.reason);
    } else {
      console.error('Error making API call:', error);
    }
  }
}
