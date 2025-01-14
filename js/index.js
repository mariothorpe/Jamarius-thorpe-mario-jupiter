let body = document.getElementsByTagName("body")[0];
let f = document.createElement("footer");
body.appendChild(f);

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
