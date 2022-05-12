const sanitize = require("sanitize-html")

module.exports.RequiredFields = (required = [], requestBody = {}) => {
  return required.map((field) => {
    return requestBody.hasOwnProperty(field)
      ? null
      : `${field} is required`
  }).filter(item => item != null)

};

//Implement this method as a helper for all models
const SanitizeInput = (inputBody) =>{

  if(typeof inputBody === 'string'){
    return sanitize(inputBody)
  } else if(Array.isArray(inputBody)){
    return inputBody.map(SanitizeInput)
  } else if(typeof inputBody === 'object' && inputBody !== null){
    return Object.keys(inputBody).reduce( (r, key)=>{
      r[key] = SanitizeInput(inputBody[key])
      return r
    }, {})
  }
  
  return inputBody

}

module.exports.SanitizeInput = SanitizeInput