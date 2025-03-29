<template>
  <div class="container">

    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="nav-drawer" :class="{ open: isOpen }">

      <SideNav />

    </div>
  </div>
</template>

<script>
import SideNav from "@/collections/SideNav.vue";
// import {FocusableGrid} from '../../dist/vue-spatial-navigation.esm'
export default {
  name: "App",
  components: {
    SideNav,
  },
  created(){
    // console.error(FocusableGrid)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
body {
  overflow: hidden;
}
.container {
  background: black;
  height: 100vh;
  overflow: hidden;
}
.main-content {
  display: flex;
  flex-direction: column;
  padding: 100px;
  overflow: hidden;
}
 .nav-drawer {
   position: fixed;
   right: 0;
   width: 200px;
   height: 100vh;
   background: #222;
   color: white;
   padding: 20px;
   transition: transform 0.3s ease-in-out;
 }

.menu-item {
  padding: 10px;
  text-align: right; /* ???????? ???? ??? */
}

.menu-item.selected,
.menu-item:focus {
  background: yellow;
  color: black;
}
</style>
