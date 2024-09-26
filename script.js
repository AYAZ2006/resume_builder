function resume() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let role = document.getElementById("role").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let projects = document.getElementById("projects").value;
    let achievements = document.getElementById("achievements").value;
    let skills = document.getElementById("skills").value;
    let courses = document.getElementById("courses").value;
    let strengths = document.getElementById("strengths").value;
    let languages = document.getElementById("languages").value;
  
    let resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Phone:</strong> ${phone} | <strong>Email:</strong> ${email} | <strong>Address:</strong> ${address}</p>
        <p><strong>Role:</strong> ${role}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
        <h4>Achievements</h4>
        <p>${achievements}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Courses</h4>
        <p>${courses}</p>
        <h4>Strengths</h4>
        <p>${strengths}</p>
        <h4>Languages Known</h4>
        <p>${languages}</p>
      `;
  
    document.getElementById("resumeDisplay").innerHTML = resumeHTML;
  }
  