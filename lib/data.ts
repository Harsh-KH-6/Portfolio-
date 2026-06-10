export const portfolio = {
  hero: {
    name: "Harsh K",
    title: "Security Researcher",
    subtitle: "",
    description: "Final-year Information Technology student focused on security research, vulnerability assessment, API security testing, and responsible disclosure. Actively contributing to vulnerability disclosure programs and building practical cybersecurity experience through real-world security research.",
    resumeLink: "https://drive.google.com/file/d/1lcw8bSsGRhNgR2jpwQwNg8r-cNMkLG1A/view?usp=sharing"
  },

  about: {
    title: "About Me",
    content: "Final-year B.E. Information Technology student passionate about cybersecurity and security research. My interests include vulnerability assessment, API security testing, web application security, and responsible disclosure.\n\nThrough vulnerability disclosure and bug bounty programs, I have reported multiple security issues, earning Hall of Fame recognitions, security acknowledgements, and swag awards from various organizations.\n\nCurrently working as a Project Intern at the National Informatics Centre (NIC), Government of India, I am continuously building practical experience in software development and cybersecurity while remaining open to cybersecurity internship opportunities and security research collaborations.",
    journey: []
  },

  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Security Skills",
        items: [
          "Vulnerability Assessment",
          "Web Application Security Testing",
          "API Security Testing",
          "Information Disclosure Analysis",
          "Attack Surface Mapping",
          "Security Reconnaissance",
          "Responsible Disclosure",
          "Technical Security Reporting"
        ]
      },
      {
        name: "Tools & Technologies",
        items: ["Burp Suite", "Nmap", "Wireshark", "Postman", "Nessus", "Metasploit"]
      },
      {
        name: "Programming & Platforms",
        items: [
          "Python",
          "REST APIs",
          "Git & Github",
          "Linux ( Ubuntu , Kali Linux )"
        ]
      },
      {
        name: "Security Methodologies",
        items: [
          "OWASP Top 10",
          "OWASP API Security Top 10",
          "CWE Classification",
          "CVSS Risk Assessment",
          "Asset Discovery & Enumeration",
          "Vulnerability Validation",
          "Responsible Disclosure Process"
        ]
      }
    ]
  },


  projects: {
    title: "Featured Projects",
    items: [
      {
        id: 1,
        title: "CyberRakshak: AI-Powered Cybersecurity Assistant",
        description: "An intelligent, multi-layered threat detection and mitigation chatbot powered by Large Language Models (LLM) and specialized Machine Learning arrays. It operates on a dual-engine architecture, dynamically routing user inputs to trigger specific ML models (Network Anomaly, Malware, Ransomware, Phishing, Zero-Day) while using generative AI for contextual analysis to synthesize actionable threat mitigation reports.",
        tags: ["LLM", "Machine Learning", "Python", "Threat Detection", "Incident Response", "Malware Analysis"],
        link: "https://github.com/Sarvesh-Jhawar/CyberRakshak"
      },
      {
        id: 2,
        title: "Network Attack Surface Monitoring Tool",
        description: "A network security monitoring and reconnaissance tool that performs port scanning, service detection, and basic vulnerability analysis. Built with React and FastAPI, the tool integrates Nmap scanning and visualizes results using interactive charts to help understand network exposure and potential attack surfaces.",
        tags: ["React", "FastAPI", "Python", "Nmap", "Chart.js"],
        link: "https://github.com/Harsh-KH-6/Attack_Surface_Monitoring_Tool"
      },
      {
        id: 3,
        title: "Phishing Website Detection using Machine Learning",
        description: "A machine learning model that detects phishing websites using URL, domain, and behavioral features. Implemented using Python and Scikit-learn with models such as Random Forest and XGBoost, achieving high classification accuracy on a feature-rich phishing dataset.",
        tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
        link: "https://github.com/Harsh-KH-6/Phising-Detection-Project"
      }
    ]
  },

  writeups: {
    title: "Security Research & Writeups",
    githubLink: "https://github.com/Harsh-KH-6/Security-Writeups-",
    items: [
      {
        id: 1,
        title: "Exposed Debug & Health Endpoints – SweetHawk",
        excerpt: "Identified publicly accessible debugging and health monitoring endpoints exposing internal application and infrastructure information without authentication. Recognized in the SweetHawk Security Researcher Hall of Fame.",
        tags: ["Information Disclosure", "Reconnaissance", "Security Assessment", "Hall of Fame"],
        link: "https://github.com/Harsh-KH-6/Security-Writeups-/blob/main/sweethawk.md"
      },
      {
        id: 2,
        title: "Multi-Finding Security Assessment – GEA",
        excerpt: "Identified multiple security issues affecting API services and development infrastructure, including broken access control (IDOR), exposed configuration data, and publicly accessible IoT API documentation. Recognized in the GEA Security Hall of Fame.",
        tags: ["API Security", "Access Control", "Information Disclosure", "Hall of Fame"],
        link: "https://github.com/Harsh-KH-6/Security-Writeups-/blob/main/gea.md"
      },
      {
        id: 3,
        title: "Internal Configuration Exposure Assessment – Axya",
        excerpt: "Identified multiple application endpoints exposing internal configuration and platform information without authentication, revealing deployment details, application settings, and technology stack information. Recognized in the Axya Security Researcher Hall of Fame.",
        tags: ["Information Disclosure", "Security Misconfiguration", "Attack Surface Mapping", "Hall of Fame"],
        link: "https://github.com/Harsh-KH-6/Security-Writeups-/blob/main/axya.md"
      },
      {
        id: 4,
        title: "Public Repository Enumeration – TU Delft",
        excerpt: "Identified an information disclosure issue within a publicly accessible repository management interface exposing internal repository names and project identifiers without authentication. Recognized in the TU Delft Security Researcher Hall of Fame.",
        tags: ["Information Disclosure", "Reconnaissance", "Asset Discovery", "Hall of Fame"],
        link: "https://github.com/Harsh-KH-6/Security-Writeups-/blob/main/tu-delft.md"
      }
    ]
  },

  platforms: {
    title: "Platform Profiles",
    items: [
      {
        id: 1,
        name: "TryHackMe",
        description: "Hands-on training focusing on penetration testing and SOC analyst pathways.",
        link: "https://tryhackme.com/p/harsssh",
        badge: "https://tryhackme-badges.s3.amazonaws.com/harsssh.png"
      },
      {
        id: 2,
        name: "HackTheBox",
        description: "Advanced penetration testing labs and real-world vulnerability exploitation scenarios.",
        link: "https://app.hackthebox.com/", // Add your actual profile URL here
        badge: "" // You can add your HTB badge URL here (e.g., https://www.hackthebox.eu/badge/image/YOUR_ID)
      }
    ]
  },



  certifications: {
    title: "Certifications",
    items: [
      {
        id: 1,
        name: "Ethical Hacker",
        issuer: "Cisco Networking Academy",
        link: "https://www.credly.com/badges/26e84406-130f-4e09-8a8e-a126e0dee182"
      },
      {
        id: 2,
        name: "Qualys Certified Specialist - Vulnerability Management Detection and Response",
        issuer: "Qualys",
        link: "https://drive.google.com/file/d/1XuSeKIPlJqWc2TqnYeFsTyVoB8IfPh_d/view?usp=sharing"
      },
      {
        id: 3,
        name: "Certified Red Team Operations Management (CRTOM)",
        issuer: "Red Team Leaders",
        link: "https://courses.redteamleaders.com/exam-completion/abcb4b8aba42bdf6"
      },
      {
        id: 4,
        name: "Agentforce Specialist",
        issuer: "Salesforce",
        link: "https://drive.google.com/file/d/1j4aVg3E58hTe6L4wDo4LMiTiRIKokH9H/view?usp=sharing"
      }
    ]
  },

  achievements: {
    title: "Achievements & Rewards",
    items: [
      {
        id: 1,
        organization: "SweetHawk",
        recognition: "Hall of Fame",
        link: "https://sweethawk.com/responsible-disclosure"
      },
      {
        id: 2,
        organization: "GEA",
        recognition: "Hall of Fame",
        link: "https://www.gea.com/en/about-us/information-security/products/responsible-disclosure-of-security-issues/hall-of-fame/"
      },
      {
        id: 3,
        organization: "TU Delft",
        recognition: "Hall of Fame",
        link: "https://www.tudelft.nl/hall-of-fame"
      },
      {
        id: 4,
        organization: "University of San Diego",
        recognition: "Appreciation Letter",
        link: "https://drive.google.com/file/d/1nyS55sWqQElFrxllJBdig-Nj7GgCJgo8/view?usp=sharing"
      },
      {
        id: 5,
        organization: "Axya",
        recognition: "Hall of Fame",
        link: "https://axya.co/legal/hall-of-fame"
      },
      {
        id: 6,
        organization: "ZKTeco",
        recognition: "Security Recognition & Swag"
      }
    ]
  },

  experience: {
    title: "Experience",
    items: [
      {
        id: 1,
        company: "National Informatics Centre (NIC), Government of India",
        role: "Project Intern",
        duration: "June 2026 – Present",
        logo: "/NIC-LOGO-IDENTITY-VARIANTS_white-01.png" as string | undefined,
        description: [
          "Contributing to government-focused software development projects.",
          "Supporting web application development and implementation activities.",
          "Collaborating with technical teams on project development and deployment tasks.",
          "Gaining exposure to secure software development practices and cybersecurity-related work."
        ]
      }
    ]
  },

  contact: {
    title: "Get In Touch",
    description: "Have a security opportunity or want to collaborate? Let's connect!",
    email: "harsh06pb@gmail.com",
    social: [
      { name: "GitHub", url: "https://github.com/Harsh-KH-6", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/khharsh/", icon: "linkedin" }
    ]
  }
}
