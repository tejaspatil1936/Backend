require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "tejaspatil1936",
    "id": 116306564,
    "node_id": "U_kgDOBu6yhA",
    "avatar_url": "https://avatars.githubusercontent.com/u/116306564?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tejaspatil1936",
    "html_url": "https://github.com/tejaspatil1936",
    "followers_url": "https://api.github.com/users/tejaspatil1936/followers",
    "following_url": "https://api.github.com/users/tejaspatil1936/following{/other_user}",
    "gists_url": "https://api.github.com/users/tejaspatil1936/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tejaspatil1936/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tejaspatil1936/subscriptions",
    "organizations_url": "https://api.github.com/users/tejaspatil1936/orgs",
    "repos_url": "https://api.github.com/users/tejaspatil1936/repos",
    "events_url": "https://api.github.com/users/tejaspatil1936/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tejaspatil1936/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 5,
    "following": 5,
    "created_at": "2022-10-20T18:41:44Z",
    "updated_at": "2024-08-08T15:33:20Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('you are on home page')
})

app.get('/aboutus', (req, res) => {
    res.send('yor are on about us page')
})

app.get('/contactus', (req, res) => {
    res.send("you are on contact us page")
})

app.get('/helloworld', (req, res) => {
    res.send('<h1 style = "color : red"> hello world </h1>')
})

app.get('/github', (req, res) => {
    res.send(githubData)
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(process.env.PORT);