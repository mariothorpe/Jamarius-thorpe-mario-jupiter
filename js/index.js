let body = document.getElementsByTagName("body")[0];
let foot = document.createElement("footer");
body.appendChild(foot);

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `Jamarius "Mario" Thorpe, \u00A9 ${thisYear}`;
footer.append(copyright);

let skills = ["Javascript", "HTML", "CSS", "GitHub"];
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
let messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let userName = ev.target.usersName.value;
    console.log(userName);
    let userEmail = ev.target.usersEmail.value;
    console.log(userEmail);
    let userMessage = ev.target.usersMessage.value;
    console.log(userMessage);
    let messageSection = document.getElementById("Messages");
    let messageList = messageSection.getElementsByTagName("ul");
    let newMessage = document.createElement("li");
    newMessage.className= "messageListItem";
    newMessage.innerHTML = `<a href: mailto:"${userEmail}">${userName}</a><span> - ${userMessage}</span>`
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.className = "removeButton";
    removeButton.addEventListener("click", function(ev) {
        let entry = this.parentNode;
        entry.remove()
    });
    newMessage.appendChild(removeButton);
    messageList[0].append(newMessage);
    messageForm.reset();
});

fetch('https://api.github.com/users/mariothorpe/repos')
    .then(response => response.json())
    .then((repositories) => {
        console.log(repositories); 
        let projectSection = document.getElementById("Projects");
        let projectList = projectSection.getElementsByTagName("ul")[0];
        for (let i = 0; i < repositories.length; i++) {
                let project = document.createElement("li");
                project.innerText = repositories[i].name;
                projectList.appendChild(project);   
        }
    })
    .catch((error) => {
        console.log(error);
    });
    
    