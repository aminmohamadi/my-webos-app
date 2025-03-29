import { createRouter, createWebHistory } from 'vue-router'
import ListExample from "@/examples/collections/ListExample";
import ListDisabledExample from "@/examples/collections/ListDisabledExample";
import CarouselExample from "@/examples/collections/CarouselExample";
import NestedCarouselExample from "@/examples/collections/NestedCarouselExample";
import GridExample from "@/examples/collections/GridExample";


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