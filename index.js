//this is a method that explicitly used for navigation.
// location.assign("https://www.youtube.com")
// The location.href is used to navigate to new url.This is a property.
// location.href="index.js/" 

// The loaction.host is used to know from which host it is coming from.
let host_name=location.pathname
console.log(host_name) 


let protocol=location.protocol
console.log(protocol)


if(location.protocol=="file:"){
    console.log("secure")
}else{
    console.log("insecure")
}

// console.log(location.href)

// location.assign("https://www.youtube.com")





let myHistory=history

console.log(myHistory)

console.log(myHistory.length)


// let back=myHistory.back()
// console.log(back)

let alert=window.alert("helloo")
console.log(alert)

let prompt=window.prompt("enter your name:")
console.log(prompt)

let confirm=window.confirm("are you sure! to logout")
console.log(confirm)


let warn=window.console.warn("be careful")
console.log(warn)

// let debug=window.console.debug(q)
// console.log(debug)

//the window.open is used to navigate to particular url location and it will open in the seperate tab.
// It having 3 attributes url,target and features.
let open=window.open("https://www.snapchat.com","snapchat")
console.log(open)


let scre=window.screen
console.log(scre)


let width=screen.width
console.log(width)

if(width<700){
    document.body.style.backgroundColor="yellow"
}else{
    document.body.style.backgroundColor="purple"

}


// Redirect to a new page after 3 seconds
setTimeout(() => {
    location.href = "https://google.com";
}, 3000);
