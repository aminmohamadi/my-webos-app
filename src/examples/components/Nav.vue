<template>
<router-link :to="{path}">{{displayName}}</router-link>
</template>

<script>
export default {
  name: "NavItem",
  props : ["path", "displayName"]
}
</script>

<style scoped>

</style>