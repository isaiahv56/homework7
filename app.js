console.log("Hello World!"); // Step 1: Verify integration

document.addEventListener("DOMContentLoaded", () => {
    let hasDownloadedResume = false; // Step 3: Track if resume was downloaded

    // Step 2: Alert when resume is downloaded
    document.querySelector(".resume-btn").addEventListener("click", () => {
        if (!hasDownloadedResume) {
            alert("Your resume is downloaded successfully!");
            hasDownloadedResume = true;
        }
    });

    // Step 4: Display personalized greeting
    const name = "Isaiah Veloz";
    document.body.insertAdjacentHTML("afterbegin", `<p style="text-align:center; font-weight:bold;">Hello, my name is ${name}! Welcome to my portfolio!</p>`);

    // Step 5: Calculate days until deadline and display it on the page
    const daysUntilDeadline = (date) => Math.ceil((new Date(date) - new Date()) / (1000 * 60 * 60 * 24));
    const deadlineDate = "2025-06-01";
    const daysLeft = daysUntilDeadline(deadlineDate);
    const deadlineMessage = `<p style="text-align:center; font-weight:bold;">Days until project deadline (${deadlineDate}): ${daysLeft}</p>`;

    // Option 1: Append to the end of the projects section (if it exists)
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
        projectsSection.insertAdjacentHTML("beforeend", deadlineMessage);
    } else {
        // Option 2: Append to the body if the projects section is not found
        document.body.insertAdjacentHTML("beforeend", deadlineMessage);
    }

    // Also log it to the console
    console.log(`Days until project deadline: ${daysLeft}`);
});
