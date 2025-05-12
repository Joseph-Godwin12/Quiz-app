const devOpsQuiz = {
    title: "DevOps Quiz",
    questions: [
        {
            question: "What does CI/CD stand for?",
            options: [
                "Code Implementation / Code Deployment",
                "Continuous Integration / Continuous Deployment",
                "Computer Integration / Continuous Development",
                "Central Integration / Central Delivery"
            ],
            answer: "Continuous Integration / Continuous Deployment"
        },
        {
            question: "Which tool is used for containerization?",
            options: ["Git", "Docker", "Jenkins", "Ansible"],
            answer: "Docker"
        },
        {
            question: "Which tool is used for orchestration?",
            options: ["GitLab", "Prometheus", "Kubernetes", "Docker"],
            answer: "Kubernetes"
        },
        {
            question: "What is the use of Jenkins?",
            options: ["CI/CD automation", "Application hosting", "Monitoring", "Data storage"],
            answer: "CI/CD automation"
        },
        {
            question: "What does YAML stand for?",
            options: [
                "Yet Another Markup Language",
                "Yes And More Language",
                "YAML Ain't Markup Language",
                "Your API Management Language"
            ],
            answer: "YAML Ain't Markup Language"
        },
        {
            question: "What is Infrastructure as Code (IaC)?",
            options: [
                "Deploying code manually",
                "Managing infrastructure using code",
                "Documenting servers",
                "Running scripts manually"
            ],
            answer: "Managing infrastructure using code"
        },
        {
            question: "Which tool is used for configuration management?",
            options: ["Grafana", "Ansible", "Kubernetes", "Docker"],
            answer: "Ansible"
        },
        {
            question: "Which service is used for monitoring in DevOps?",
            options: ["Prometheus", "Terraform", "Nginx", "Jira"],
            answer: "Prometheus"
        },
        {
            question: "What is blue-green deployment?",
            options: [
                "Deploying new version alongside old one",
                "Shutting down all services",
                "Cloning servers",
                "Rolling back changes"
            ],
            answer: "Deploying new version alongside old one"
        },
        {
            question: "What is a pipeline in DevOps?",
            options: [
                "A testing method",
                "A set of automated steps",
                "A series of manual tasks",
                "A monitoring tool"
            ],
            answer: "A set of automated steps"
        },
        {
            question: "Which command builds a Docker image?",
            options: ["docker build", "docker init", "docker image", "docker create"],
            answer: "docker build"
        },
        {
            question: "Which file defines a Docker image?",
            options: ["Dockerfile", "Imagefile", "Containerfile", "DockerImage.txt"],
            answer: "Dockerfile"
        },
        {
            question: "Which DevOps tool is used for provisioning infrastructure?",
            options: ["Ansible", "Terraform", "Kubernetes", "GitHub"],
            answer: "Terraform"
        },
        {
            question: "What is a Helm chart used for?",
            options: [
                "Package Kubernetes applications",
                "Log deployments",
                "Store images",
                "Monitor containers"
            ],
            answer: "Package Kubernetes applications"
        },
        {
            question: "Which Git command is used to clone a repository?",
            options: ["git fork", "git pull", "git init", "git clone"],
            answer: "git clone"
        },
        {
            question: "What is the purpose of version control?",
            options: [
                "Secure servers",
                "Track code changes",
                "Deploy code",
                "Automate tests"
            ],
            answer: "Track code changes"
        },
        {
            question: "Which command is used to start a Jenkins job manually?",
            options: ["Run Job", "Deploy", "Trigger", "Build Now"],
            answer: "Build Now"
        },
        {
            question: "What is the role of a reverse proxy like Nginx?",
            options: [
                "Forward client requests to backend",
                "Scan for malware",
                "Automate builds",
                "Build applications"
            ],
            answer: "Forward client requests to backend"
        },
        {
            question: "What is log aggregation used for?",
            options: [
                "Centralizing logs",
                "Testing UI",
                "Encrypting data",
                "Backing up files"
            ],
            answer: "Centralizing logs"
        },
        {
            question: "Which platform is used for code collaboration?",
            options: ["Slack", "GitHub", "Docker Hub", "Trello"],
            answer: "GitHub"
        }
    ]
};

export default devOpsQuiz;
