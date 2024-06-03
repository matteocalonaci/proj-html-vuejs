<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import store from './data/store.js';
export default {
  name: "App",
  components: {
    PageHeader,
    PageMain,
    PageFooter,
    store

  },

  data() {
    return {
      store

    }

  },

  methods: {


  },

}
</script>

<template>
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style scoped></style>