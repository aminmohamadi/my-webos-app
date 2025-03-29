<template>
  <div class="nav-drawer" :class="{ open: isOpen }">
    <Component
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item focusable"
        :class="{ selected: selectedIndex === index }"
        :id="index"
        v-focus
        @down="componentFunctionDown"
    >
      {{item}}
    </Component>
  </div>
</template>

<script>
import { navigationService } from "vue-spatialnavigation";

export default {
  data() {
    return {
      menuItems: ["پخش زنده", "سریال‌ها", "فیلم‌ها", "تنظیمات"],
      selectedIndex: 0,
      isOpen: true,
    };
  },
  methods: {
    componentFunctionDown: () => {
      let el = navigationService.getFocusElementById("button2");
      if (el) el.focus()
      console.log('hello World')
    },
    componentFunctionUp: () =>  {
      let el = navigationService.getFocusElementById("button1");
      if (el) el.focus()
    }
  }
};
</script>

<style>
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
}

.menu-item.selected,
.menu-item:focus {
  background: yellow;
  color: black;
}
</style>
