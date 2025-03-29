<template>
  <Nav
      :child="Card"
      :isFocused="true"
      :items="items"
      :shouldScroll="true"
      :maxColumn="4"
  />
</template>

<script>
import { routes } from "@/examples/router";
import {Nav} from "@/focusable";
import NavItem from "@/examples/components/Nav.vue"
import Card from "@/examples/components/Card.vue";
export default {
  components : {
   Nav
  },
  data() {
    return {
      items: routes,
      Card: NavItem,
    };
  },
};
</script>

<style lang="css" scoped>
.side-nav {
  float: left;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: grey;
  width: 300px;
}
.side-nav .title {
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 24px;
    background: #41b883;
  }
.side-nav .router-link-active {
    background: #35495e;
  }
.side-nav a {
    background: grey;
    padding: 20px;
    color: white;
    text-decoration: none;
    font-size: 24px;
  }
</style>
