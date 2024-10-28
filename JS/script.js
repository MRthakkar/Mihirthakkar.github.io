document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll(".project-card");

  // Project data with detailed descriptions
  const projects = {
    project1: {
      title: "Interactive Web App",
      technologies: "HTML, CSS, JavaScript",
      description: "An interactive web application featuring various UI elements, animations, and dynamic content to enhance user experience."
    },
    project2: {
      title: "SQL Database Management System",
      technologies: "SQL, Database Management",
      description: "Designed a relational database to manage inventory, focusing on data normalization and indexing for optimized query performance."
    },
    project3: {
      title: "Data Processing Automation with Python",
      technologies: "Python",
      description: "Built automation scripts for data cleaning, transformation, and analysis, increasing efficiency by 60%."
    },
    project4: {
      title: "E-commerce Backend System",
      technologies: "C#, ASP.NET",
      description: "Developed a backend for an e-commerce platform to handle product data, authentication, and order management."
    },
    project5: {
      title: "Data Analytics Dashboard",
      technologies: "Data Analytics, Excel, Tableau",
      description: "Created an interactive dashboard for visualizing sales and customer trends to support data-driven decision-making."
    }
  };

  // Initialize Bootstrap Modal
  const modalElement = document.getElementById("projectModal");
  const modal = new bootstrap.Modal(modalElement);

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projectKey = card.getAttribute("data-project");
      const project = projects[projectKey];

      if (project) {
        // Update modal content with project data
        document.getElementById("projectTitle").textContent = project.title;
        document.getElementById("projectTechnologies").textContent = project.technologies;
        document.getElementById("projectDescription").textContent = project.description;

        // Show the modal
        modal.show();
      } else {
        console.error(`Project with key "${projectKey}" not found.`);
      }
    });
  });

  // Close modal when clicking outside or on the close button
  modalElement.addEventListener("hidden.bs.modal", () => {
    document.getElementById("projectTitle").textContent = "";
    document.getElementById("projectTechnologies").textContent = "";
    document.getElementById("projectDescription").textContent = "";
  });
});
