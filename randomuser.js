//https://randomuser.me/api
var profile=document.querySelector('#profile')
var fullName=document.querySelector('#FullName')
var gender=document.querySelector('#gender')
var email=document.querySelector('#email')
var phone=document.querySelector('#phone')
fullName.innerHTML="Loading..."
gender.innerHTML="Loading..."
email.innerHTML="Loading..."
phone.innerHTML="Loading..."
async function fetchUsers(){
    const rawdata=await fetch('https://randomuser.me/api')
    console.log(rawdata)
    const data=await rawdata.json()
    console.log(data)
    const user=data.results[0]
    console.log(user)
    fullName.innerHTML=`${user.name.title}.${user.name.first}${user.name.last}`
    email.innerHTML=user.email
    gender.innerHTML=user.gender
    phone.innerHTML=user.phone
    profile.src=user.picture.large
}
fetchUsers()