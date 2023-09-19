const Home = {
    template: `
        <section id="home">
            <h2>Developer Information</h2>
            <p>Name: <input type="text" v-model="developer.name"></p>
            <p>Date of Birth: <input type="date" v-model="developer.dob"></p>
            <p>Address: <input type="text" v-model="developer.address"></p>
            <p>Course Progress: {{ progressPercentage }}%</p>
            <input type="range" v-model="progressPercentage" min="0" max="100">
            <progress :value="progressPercentage" max="100"></progress>
            <button @click="saveDeveloperInfo">Save</button>
        </section>
    `,
    data() {
        return {
            developer: {
                name: 'Thien Phu',
                dob: '2002-02-02',
                address: 'Melbourne'
            },
            progressPercentage: 50,
        };
    },
    methods: {
        saveDeveloperInfo() {
            console.log('Developer info saved!');
        },
    }
};

const Milestones = {
    template: `
        <section id="milestones">
            <h2>Course Milestones</h2>
            <div v-for="(module, index) in courseModules" :key="index">
                <h3>{{ module.title }}</h3>
                <p>{{ module.description }}</p>
                <button @click="editMilestone(module)">Edit</button>
            </div>
            <div>
                <h3>Add Milestone</h3>
                <input type="text" v-model="newMilestone.title" placeholder="Milestone Title">
                <textarea v-model="newMilestone.description" placeholder="Milestone Description"></textarea>
                <button @click="addMilestone">+</button>
            </div>
        </section>
    `,
    data() {
        return {
            courseModules: [
                { title: "Introduction to HTML", description: "Learn the basics of HTML." },
                { title: "Introduction to CSS", description: "Dive into the world of styling." },
            ],
            newMilestone: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        editMilestone(module) {
            const newTitle = prompt("Edit milestone title:", module.title);
            if (newTitle) module.title = newTitle;
            
            const newDescription = prompt("Edit milestone description:", module.description);
            if (newDescription) module.description = newDescription;
        },
        addMilestone() {
            if (this.newMilestone.title.trim() !== '' && this.newMilestone.description.trim() !== '') {
                this.courseModules.push({
                    title: this.newMilestone.title,
                    description: this.newMilestone.description
                });
                this.newMilestone.title = '';
                this.newMilestone.description = '';
            }
        }
    }
};

const Skills = {
    template: `
        <section id="skills">
            <h2>Skills Acquired</h2>
            <div v-for="(skill, index) in skills" :key="index">
                <p>{{ skill }}</p>
                <button @click="editSkill(index)">Edit</button>
            </div>
            <div>
                <h3>Add Skill</h3>
                <input type="text" v-model="newSkill" placeholder="New Skill">
                <button @click="addSkill">+</button>
            </div>
        </section>
    `,
    data() {
        return {
            skills: ['HTML', 'CSS', 'JavaScript'],
            newSkill: '',
        };
    },
    methods: {
        editSkill(index) {
            const newSkill = prompt("Edit skill:", this.skills[index]);
            if (newSkill) this.skills[index] = newSkill;
        },
        addSkill() {
            if (this.newSkill.trim() !== '') {
                this.skills.push(this.newSkill);
                this.newSkill = '';
            }
        },
    },
};

const Projects = {
    template: `
        <section id="projects">
            <h2>Projects & Tasks</h2>
            <div v-for="(project, index) in projects" :key="index">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <button @click="editProject(project)">Edit</button>
            </div>
            <div>
                <h3>Add Project</h3>
                <input type="text" v-model="newProject.title" placeholder="Project Title">
                <textarea v-model="newProject.description" placeholder="Project Description"></textarea>
                <button @click="addProject">+</button>
            </div>
        </section>
    `,
    data() {
        return {
            projects: [
                { title: "Project 1", description: "Description of project 1" },
                { title: "Project 2", description: "Description of project 2" }
            ],
            newProject: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        editProject(project) {
            const newTitle = prompt("Edit project title:", project.title);
            if (newTitle) project.title = newTitle;
            
            const newDescription = prompt("Edit project description:", project.description);
            if (newDescription) project.description = newDescription;
        },
        addProject() {
            if (this.newProject.title.trim() !== '' && this.newProject.description.trim() !== '') {
                this.projects.push({
                    title: this.newProject.title,
                    description: this.newProject.description
                });
                this.newProject.title = '';
                this.newProject.description = '';
            }
        }
    }
};

const Feedback = {
    template: `
        <section id="feedback">
            <h2>Feedback & Suggestions</h2>
            <div v-for="(feedbackItem, index) in feedbackItems" :key="index">
                <p>{{ feedbackItem.name }} ({{ feedbackItem.email }})</p>
                <p>{{ feedbackItem.message }}</p>
                <button @click="editFeedback(index)">Edit</button>
            </div>
            <div>
                <h3>Add Feedback</h3>
                <input type="text" v-model="newFeedback.name" placeholder="Your Name">
                <input type="email" v-model="newFeedback.email" placeholder="Your Email">
                <textarea v-model="newFeedback.message" placeholder="Your Feedback"></textarea>
                <button @click="addFeedback">+</button>
            </div>
        </section>
    `,
    data() {
        return {
            feedbackItems: [
                {
                    name: 'John',
                    email: 'john@example.com',
                    message: 'Great website!'
                }
            ],
            newFeedback: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        editFeedback(index) {
            const feedbackItem = this.feedbackItems[index];
            const newName = prompt("Edit feedback name:", feedbackItem.name);
            if (newName) feedbackItem.name = newName;

            const newEmail = prompt("Edit feedback email:", feedbackItem.email);
            if (newEmail) feedbackItem.email = newEmail;

            const newMessage = prompt("Edit feedback message:", feedbackItem.message);
            if (newMessage) feedbackItem.message = newMessage;
        },
        addFeedback() {
            if (
                this.newFeedback.name.trim() !== '' &&
                this.newFeedback.email.trim() !== '' &&
                this.newFeedback.message.trim() !== ''
            ) {
                this.feedbackItems.push({
                    name: this.newFeedback.name,
                    email: this.newFeedback.email,
                    message: this.newFeedback.message
                });
                this.newFeedback.name = '';
                this.newFeedback.email = '';
                this.newFeedback.message = '';
            }
        }
    }
};

const Contact = {
    template: `
        <section id="contact">
            <h2>Contact</h2>
            <p>Phone: {{ contact.phone }}</p>
            <p>Email: {{ contact.email }}</p>
            <button @click="editContact">Edit</button>
        </section>
    `,
    data() {
        return {
            contact: {
                phone: '+04123456789',
                email: 'developer@email.com'
            },
        };
    },
    methods: {
        editContact() {
            const newPhone = prompt("Edit contact phone:", this.contact.phone);
            if (newPhone) this.contact.phone = newPhone;

            const newEmail = prompt("Edit contact email:", this.contact.email);
            if (newEmail) this.contact.email = newEmail;
        },
    }
};

const routes = [
    { path: '/home', component: Home },
    { path: '/milestones', component: Milestones },
    { path: '/skills', component: Skills },
    { path: '/projects', component: Projects },
    { path: '/feedback', component: Feedback },
    { path: '/contact', component: Contact },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({
    data() {
        return {
            // ... data ...
        };
    },
    methods: {
        backToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        // ... other methods ...
    }
});

app.use(router);
app.mount('#app');

window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

