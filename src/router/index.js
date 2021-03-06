import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
import Projects from "@/views/Projects.vue";
import Articles from "@/views/Articles.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;