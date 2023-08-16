import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    // adding auth  route
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/Auth.vue"),
    },
    {
      path: "/create-blog",
      name: "createBlog",
      component: () => import("../views/CreateBlog.vue"),
    },
    // add blog route
    {
      path: "/blog/:id",
      name: "blog",
      component: () => import("../views/BlogPage.vue"),
    },
    // // add blogs route
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/Blogs.vue"),
    },

    // add profile route
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});

export default router;
