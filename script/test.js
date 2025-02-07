const isVerified = "";
// if (isVerified == true){
// console.log("User is Verified")

// }
// else {
//     console.log("User is not verified")
// }
// console.log(`${isVerified===true ?"User is verified":"User is not verified"}`)


function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time/3600);
    let remainigSecond = time%3600;
    const minutes = parseInt(remainigSecond/60);
    remainigSecond=remainigSecond%60;

return `${hour}hour ${minutes} minutes ${remainigSecond} second ago`

}
console.log(getTimeString(3700));