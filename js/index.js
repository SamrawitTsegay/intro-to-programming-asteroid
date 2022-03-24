const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement("p");
//document.getElementsByTagName("footer")[0].innerHTML= `&copy;  ${thisYear} Samrawit Tsegay. `; 

copyright.innerHTML= `&copy;  ${thisYear} Samrawit Tsegay. `; 
document.getElementsByTagName('footer')[0].appendChild(copyright);

const skills = ["javascript", "HTML", "CSS"]; 
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('skillsSection');
for(let i = 0; i < skills.length; i++){
const skill = document.createElement('li');
skill.appendChild(document.createTextNode(skills[i]));
skillsSection.appendChild(skill);

}
document.getElementById("skillsList").appendChild(skills[0]);
