# How to Update Your Portfolio

This guide explains how to easily update the text, projects, skills, and notes on your new portfolio website without needing to dig deep into the complex React codebase.

## 1. Updating Projects Page (`src/data/projectsData.js`)
All project information is now centrally located in the `frontend/src/data/projectsData.js` file.

**To add a new project:**
Copy an existing object in the array and paste it at the bottom. Fill in the new details:
```javascript
{
    id: "my-new-project-url-name", // Used for the URL (e.g., /projects/my-new-project-url-name)
    title: "My Amazing Project",
    status: "Completed", // Or "Currently Developing" to get the red glowing border
    description: "A short summary shown on the cards.",
    techStack: ["React", "Node"], // Add as many as you want
    tryItLink: "https://your-deployed-site.com", // Or "/wip"
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // For the detailed page
    videoPlaceholder: "Link to an image if you don't have a video yet",
    thumbnail: "Link to the image for the main projects page",
    details: {
        problem: "What problem does this solve?",
        dataUsed: "Where did you get the data?",
        problemsFaced: "What was hard about building this?"
    }
}
```

## 2. Updating Skills (`src/pages/Skills.jsx`)
Your skills are located inside the `skillCategories` array in the `Skills.jsx` file.

**To add a new skill to a category:**
Find the category you want (e.g., "AI, ML & Data Science") and add a new object to its `skills` array:
```javascript
{ 
    name: "New Skill Name", 
    icon: "bi-star", // Go to https://icons.getbootstrap.com/ to find icon names
    level: "Expert", // Can be Expert, Advanced, Intermediate, or Learning
    useCase: "Short description of how you use it" 
}
```

## 3. Updating Notes (`src/pages/Notes.jsx`)
Your notes are stored in the `notesData` array inside `Notes.jsx`.

**To add a new note:**
Add a new object to the array:
```javascript
{
    title: "New Note Subject",
    topic: "The category (e.g. AI / ML)",
    description: "What the notes are about.",
    date: "Mar 2024",
    icon: "bi-book", // Find icons at https://icons.getbootstrap.com/
    link: "/my_notes_file.pdf" // Put the PDF in the frontend/public folder!
}
```

## 4. Updating Certifications (`src/pages/Certifications.jsx`)
Similar to Notes, your certificates are stored in the `certifications` array inside `Certifications.jsx`.

## 5. Summary of Where Files Go
- **PDFs (Resume, Certificates, Notes) & Images:** Put these inside the `frontend/public/` folder. For example, if you place `my_image.png` in `public/`, you can use it in your code as `thumbnail: "/my_image.png"`.

## Troubleshooting Contact Form
If the contact form fails with "Interferences detected in the network":
1. Make sure your Render backend environment variables (`EMAIL_USER` and `EMAIL_PASS`) are correctly set in the Render dashboard.
2. If using Gmail, ensure you have an **App Password** generated, rather than your standard account password.
3. Keep in mind that Render free tier spins down after 15 minutes of inactivity; the very first request might take up to 50 seconds to complete.
