console.log("Hello World!"); // Step 1: Verify integration

document.addEventListener("DOMContentLoaded", () => {
    let hasDownloadedResume = false;
    let downloadCount = 0;

    // === Resume Download Alert + Counter ===
    const resumeBtn = document.querySelector(".resume-btn");
    const counterText = document.createElement("p");
    document.querySelector(".footer").appendChild(counterText);

    resumeBtn.addEventListener("click", () => {
        if (!hasDownloadedResume) {
            alert("Your resume is downloaded successfully!");
            hasDownloadedResume = true;
        }
        downloadCount++;
        counterText.textContent = `Resume downloaded ${downloadCount} time(s).`;
    });

    // === Greeting Message ===
    const name = "Isaiah Veloz";
    document.body.insertAdjacentHTML(
        "afterbegin",
        `<p style="text-align:center; font-weight:bold;">Hello, my name is ${name}! Welcome to my portfolio!</p>`
    );

    // === Days Until Deadline Message ===
    const daysUntilDeadline = (date) =>
        Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
    const deadlineDate = "2025-06-01";
    const daysLeft = daysUntilDeadline(deadlineDate);
    const deadlineMessage = `<p style="text-align:center; font-weight:bold;">Days until project deadline (${deadlineDate}): ${daysLeft}</p>`;

    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
        projectsSection.insertAdjacentHTML("beforeend", deadlineMessage);
    } else {
        document.body.insertAdjacentHTML("beforeend", deadlineMessage);
    }
    console.log(`Days until project deadline: ${daysLeft}`);

    // === Add Skill Functionality ===
    document.querySelector("button.btn.btn-primary").addEventListener("click", () => {
        const input = document.getElementById("skillInput");
        const skill = input.value.trim();
        if (skill) {
            const list = document.getElementById("skillsList");
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = skill;
            list.appendChild(li);
            input.value = "";
        }
    });

    // === Display Projects Dynamically with Status ===
    const projectTitles = ["Portfolio Website", "Cybersecurity Tool", "Advanced Threat Detection"];
    const projectDescriptions = [
        "A personal portfolio showcasing my skills and projects.",
        "A basic security tool to scan and analyze networks.",
        "AI-driven cybersecurity threat detection system."
    ];
    const projectDeadlines = ["2025-04-15", "2024-12-10", "2023-09-01"];
    const today = new Date();

    const projectContainer = document.querySelector("#projects .row");
    projectContainer.innerHTML = ""; // Clear placeholder cards

    for (let i = 0; i < projectTitles.length; i++) {
        const deadline = new Date(projectDeadlines[i]);
        const status = deadline > today ? "Ongoing" : "Completed";

        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${projectTitles[i]}</h5>
                    <p class="card-text">${projectDescriptions[i]}</p>
                    <p class="card-text"><strong>Deadline:</strong> ${projectDeadlines[i]}</p>
                    <p class="card-text"><strong>Status:</strong> ${status}</p>
                </div>
            </div>
        `;
        projectContainer.appendChild(col);
    }

    // === Dynamic Education Table ===
    const educationData = [
        { institution: "AWC", degree: "Associate in Cyber Criminology", duration: "2021–2023" },
        { institution: "NAU", degree: "B.S. in Cybersecurity", duration: "2023–Expected 2027" }
    ];
    const eduTable = document.querySelector("#education tbody");
    eduTable.innerHTML = "";
    educationData.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.institution}</td>
            <td>${entry.degree}</td>
            <td>${entry.duration}</td>
        `;
        eduTable.appendChild(row);
    });

    // === Dynamic Experience Table ===
    const experienceData = [
        { company: "Little Caesars", position: "Team Member", duration: "2020–2022" }
    ];
    const expTable = document.querySelector("#experience tbody");
    expTable.innerHTML = "";
    experienceData.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.company}</td>
            <td>${entry.position}</td>
            <td>${entry.duration}</td>
        `;
        expTable.appendChild(row);
    });

    // === BONUS: Theme Toggle & Style Customizer ===
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const fontSizeInput = document.getElementById("fontSizeInput");
    const bgColorInput = document.getElementById("bgColorInput");

    let darkMode = false;

    themeToggleBtn.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.style.background = darkMode ? "#222" : bgColorInput.value;
        document.body.style.color = darkMode ? "#fff" : "#000";

        document.querySelector(".navbar").style.background = darkMode
            ? "#111"
            : "linear-gradient(90deg, #333, #444)";
        document.querySelector(".footer").style.background = darkMode
            ? "#111"
            : "linear-gradient(90deg, #333, #444)";
    });

    fontSizeInput.addEventListener("input", () => {
        document.body.style.fontSize = `${fontSizeInput.value}px`;
    });

    bgColorInput.addEventListener("input", () => {
        if (!darkMode) {
            document.body.style.background = bgColorInput.value;
        }
    });
});
