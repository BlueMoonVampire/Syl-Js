const fetch = require("node-fetch")


class Vanitas {


  async getinfo(user) {

  if(!user) {

      throw new Error("Please Enter User Id")

    }

    let json = await fetch(`https://vanitas-api.up.railway.app/user/${encodeURIComponent(user)}`)

    let x = await json.json()

    return x

  }

}



module.exports = Vanitas
