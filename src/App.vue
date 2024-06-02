<script>
import Header from "./components/Header.vue";
import Madal from "./components/Madal.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Madal
  },
  data() {
    return {
      message: "Hello Vue.js",
      count: 0,
      name: "",
      users: [],
      isMadal: false,
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    };
  },
  methods: {
    increment() {
      this.count++;
    },

    getInput() {
      this.users.push(this.name);
    },

    showMadal() {
      this.isMadal = true;
    }
  }
};
</script>

<template>
  <Header @login-clicked="showMadal" />
  <Madal v-if="isMadal" @close="isMadal = false"/>
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>
