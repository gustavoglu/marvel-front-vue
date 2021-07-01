import Vue from "vue";
import VueRouter from "vue-router";
import Characters from '../views/Characters.vue'
import Comics from "../views/Comics.vue";
import Series from "../views/Series.vue";
import Creators from "../views/Creators.vue";
import MarvelDetail from "../views/MarvelDetail.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/list/characters",
    meta:{title:'MARVEL'}
  },
  {
    path: "/creators",
    name: "creators",
    component: Creators,
  },
  {
    path: "/comics",
    name: "comics",
    component: Comics,
  },
  {
    path: "/series",
    name: "series",
    component: Series,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters,
  },

  {
    path: "/detail/:entityName/:id",
    name: "MarvelDetail",
    component: MarvelDetail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
