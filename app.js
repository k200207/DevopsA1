document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here

    // Example: Add a project dynamically
    const projectList = document.getElementById('project-list');
    const project = document.createElement('div');
    project.className = 'project';
    project.innerHTML = '<h3>Project Title</h3><p>Description of the project.</p>';
    projectList.appendChild(project);
});
