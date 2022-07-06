const axios = require('axios')

const req = async () => {
  try {
    const response = await axios.get('http://yesno.wtf/api/')
    return response
  } catch (error) {
    return null
  }
}

module.exports = req
