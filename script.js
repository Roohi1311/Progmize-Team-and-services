console.log("JS Working");

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

function showMember() {

    empImage.src = teamMembers[index].image;
    empRole.textContent = teamMembers[index].role;
    empName.textContent = teamMembers[index].name;

    index++;

    if (index >= teamMembers.length) {

        clearInterval(teamInterval);

        setTimeout(function () {

            window.location.href = "back.html";

        }, 5000);

    }

}

showMember();

let teamInterval = setInterval(showMember, 5000);
