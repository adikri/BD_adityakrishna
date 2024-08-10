let express = require('express');
let app = express();

let PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
})

let githubPublicData = {
    username: "ankit123",
    fullName: "Ankit Kumar",
    email: "ankit@gmail.com",
    repositories: 24,
    gists: 12,
    joinedOn: "Sep 2018"
}

//q1

function getProfileUrl (githubPublicData) {
    return "https://github.com/" + githubPublicData.username;
}

app.get("/github-profile", (req, res) => {
    let profileUrl = getProfileUrl(githubPublicData);
    res.json({profileUrl: profileUrl});
})

//q2

function getPublicEmail (githubPublicData) {
    return githubPublicData.email;
}

app.get("/github-public-email", (req, res) => {
    let publicEmail = getPublicEmail(githubPublicData);
    res.json({publicEmail: publicEmail});
})

//q3

function getReposCount(githubPublicData){
    return githubPublicData.repositories;
}

app.get("/github-repos-count", (req, res) => {
    let reposCount = getReposCount(githubPublicData);
    res.json({reposCount: reposCount});
})

//q4

function getGistsCount(githubPublicData){
    return githubPublicData.gists;
}

app.get("/github-gists-count", (req, res) => {
    let gistsCount = getGistsCount(githubPublicData);
    res.json({ gistsCount: gistsCount});
})

//q5

function getUserBio(githubPublicData){
    return {
        fullName: githubPublicData.fullName,
        joinedOn: githubPublicData.joinedOn,
        email: githubPublicData.email
    }
}

app.get("/github-user-bio", (req, res) => {
    let bio = getUserBio(githubPublicData);
    res.json(bio);
})

//q6

function getRepoUrl (githubPublicData, repoName) {
    return "https://github.com/" + githubPublicData.username + "/" + repoName;
}

app.get("/github-repo-url", (req, res) => {
    let repoName = req.query.repoName
    let repoUrl = getRepoUrl(githubPublicData, repoName);
    res.json({ repoUrl: repoUrl});
})

