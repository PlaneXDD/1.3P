const Projects = {
    data() {
        return {
            projects: [
                { name: "Project 1", description: "Description for project 1", date: "2023-01-01" },
                { name: "Project 2", description: "Description for project 2", date: "2023-02-01" },
            ]
        };
    },
    template: `
    <section>
        <h2>My Projects</h2>
        <table v-if="projects.length > 0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.name">
                    <td>{{ project.name }}</td>
                    <td>{{ project.description }}</td>
                    <td>{{ project.date }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else>No projects available at the moment.</p>
    </section>
    `
};

const About = {
    template: `
    <section>
        <h2>About Me</h2>
        <p>Hello, I'm Thien Phu Pham, a web developer.</p>
    </section>
    `
};

const Contact = {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            alert('Form submitted!');
            // Handle the form submission, e.g., send data to a server.
        }
    },
    template: `
    <section>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name">
            
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
            
            <label for="message">Message:</label>
            <textarea id="message" v-model="message"></textarea>
            
            <input type="submit" value="Submit">
        </form>
    </section>
    `
};

const routes = [
    { path: '/', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
