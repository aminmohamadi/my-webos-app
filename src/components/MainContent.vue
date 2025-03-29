<template>
  <div class="main-content">
    <h2>{{ activeCategory }}</h2>
    <div class="content-grid">
      <div
          v-for="(item, index) in contentItems"
          :key="index"
          class="card focusable"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      contentItems: [],
      activeCategory: this.category || "فیلم‌ها",
    };
  },
  methods: {
    fetchContent() {
      setTimeout(() => {
        this.contentItems = [
          { title: `${this.activeCategory} 1` },
          { title: `${this.activeCategory} 2` },
          { title: `${this.activeCategory} 3` }
        ];
      }, 1000);
    }
  },
  watch: {
    category(newCategory) {
      this.activeCategory = newCategory;
      this.fetchContent();
    }
  },
  mounted() {
    this.fetchContent();
  }
};
</script>

<style>
.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.card {
  padding: 10px;
  background: gray;
  text-align: center;
}

.card:focus {
  background: yellow;
  color: black;
}
</style>
