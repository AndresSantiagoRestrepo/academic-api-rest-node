exports.sendSMS=async(phone)=>{
    let code = Math.random(10)
    console.log(`Sending SMS wtih code ${code} to phone ${phone}`)
}