const fetch = require("node-fetch")


class Sylviorus {


  async getinfo(user) {

  if(!user) {

      throw new Error("Please Enter User Id")

    }

    let json = await fetch(`https://sylviorus.up.railway.app/user/${encodeURIComponent(user)}`)

    let syl = await json.json()

    return syl

  }

}



module.exports = Sylviorus
