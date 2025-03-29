import { createRouter, createWebHistory } from 'vue-router'
import ListExample from "@//collections/ListExample";
import ListDisabledExample from "@/collections/ListDisabledExample";
import CarouselExample from "@/collections/CarouselExample";
import NestedCarouselExample from "@/collections/NestedCarouselExample";
import GridExample from "@/collections/GridExample";


export const routes = [
  {
    path: "/list",
    displayName: "List",
    component: ListExample,
  },
  {
    path: "/listdisabled",
    displayName: "List with disabled items",
    component: ListDisabledExample,
  },
  {
    path: "/carousel",
    displayName: "Carousel",
    component: CarouselExample,
  },
  {
    path: "/nestedcarousel",
    displayName: "Nested Carousel",
    component: NestedCarouselExample,
  },
  {
    path: "/grid",
    displayName: "Grid",
    component: GridExample,
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router