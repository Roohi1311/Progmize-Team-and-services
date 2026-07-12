console.log("script loaded");
console.log("JS working");
const teamMembers = [
    {
        role: "CEO",
        name: "Mohsin Rehmat",
        image: "CEO.jpeg"
    },
    {
        role: "Manager & Business Analyst",
        name: "Ayesha Aghyaz",
        image: "Manajor.jfif"
    },
    {
        role: "HR",
        name: "Areesha Umar",
        image: "HR.jpeg"
    },
    {
        role: "Frontend Developer",
        name: "Hira Mithani",
        image: "FrontEnd Developer.jpeg"
    },
    {
        role: "Backend Developer",
        name: "Gulab Ahmed",
        image: "Backend Developer.jpeg"
    },
    {
        role: "QA Tester",
        name: "Raviha Shaukat",
        image: "QA Tester.jpeg"
    }
];

let index = 0;

const empImage = document.getElementById("empImage");
const empRole = document.getElementById("empRole");
const empName = document.getElementById("empName");
const teamCard = document.getElementById("teamCard");

function showTeamMember(){

    empImage.src = teamMembers[index].image;
    empRole.textContent = teamMembers[index].role;
    empName.textContent = teamMembers[index].name;

    index++;

    if(index >= teamMembers.length){
        index = 0;
    }
}

document.getElementById("teamBtn").addEventListener("click", function(){

    teamCard.style.display = "flex";

    showTeamMember();

    setInterval(showTeamMember, 3000);

});
