const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement("p");
//document.getElementsByTagName("footer")[0].innerHTML= `&copy;  ${thisYear} Samrawit Tsegay. `; 

copyright.innerHTML= `&copy;  ${thisYear} Samrawit Tsegay. `; 
document.getElementsByTagName('footer')[0].appendChild(copyright);

const skills = ["javascript", "HTML", "CSS", "Github"]; 
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('skillsSection');
for(let i = 0; i < skills.length; i++){
const skill = document.createElement('li');
skill.appendChild(document.createTextNode(skills[i]));
skillsSection.appendChild(skill);

}
//document.getElementById("skillsList").appendChild(skills[0]);

// const submit = document.getElementById('sub_button');
const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', (event) => {
 event.preventDefault();
const name = event.target.name.value;
const email = event.target.email.value;
const textarea = event.target.message.value;
//console.log(name.value,email.value,textarea.value);
messageForm.reset();  
                     //to creat li and append it to ul
 console.log(email);
 console.log(name);
 console.log(textarea);
 const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
 messageList.appendChild(newMessage);
newMessage.innerHTML = `<a href = "mailto: ${email}" >` +"\n"+ name +`</a>`+ "\n"+`<span>  wrote:  ${textarea}</span>`;
                 //creat edit button and end edit button
// const editButton = document.createElement('button');
// editButton.innerText = 'Edit';
// newMessage.appendChild(editButton);
// editButton.addEventListener("click", function(){
//     this.parentNode.contentEditable = true;
// newMessage.value;
// messageForm.reset();
// editButton.reset;
// });

//
                //creat remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
//removeButton.type= 'button'; 
newMessage.appendChild(removeButton);
//newMessage.appendChild('removeButton');
removeButton.addEventListener("click", function(){
this.parentNode.remove();
newMessage.value;
messageForm.reset();
removeButton.reset;
});
//});
                      //creat button for hide and show
const btn_hide = document.querySelector('#btn_hide');
btn_hide.addEventListener('click', (event)=>{
 event.preventDefault();
if(newMessage.style.display==='none'){
    btn_hide.textContent='hide list';
    newMessage.style.display='block';
}
else{
   btn_hide.textContent='show list';
   newMessage.style.display='none';
}
newMessage.reset;
})
btn_hide.reset;

})


// var githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/SamrawitTsegay/repos");
//   githubRequest.send();
// githubRequest.onreadystatechange = function(load) {
//     if (githubRequest.readyState === 4) {
//       var repositories = JSON.parse(this.response)
//       console.log(repositories);
//     }
//       const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');
//     for(i = 0; i <= repositories.length; i++ ){
//     const project = document.createElement('li');
//     project.innerHTML = `<a href = ${repositories[i]}>${repositories[i].name}</a>`
//     projectList.appendChild(project);
//     }

  function ProjectFetch() {
    fetch('https://api.github.com/users/SamrawitTsegay/repos')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const dataFliter = data.filter((repo) =>
        repo.name.includes('intro-to-programming')
        )

        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')

        for (let repository of dataFliter) {
          const project = document.createElement('li')
          project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
          projectList.appendChild(project)
        }
      })
  }

  document.addEventListener('DOMContentLoaded', () => {
    ProjectFetch()
  })
//}
