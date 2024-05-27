<script>
import Header from "./components/Header.vue"
import Intro from "./components/Intro.vue"
import Intro2 from "./components/Intro2.vue"
import AfterIntro from "./components/AfterIntro.vue"
import Blog from "./components/Blog.vue"

export default {
  components: {
    Header,
    Intro,
    Intro2,
    AfterIntro,
    Blog
  },
  data() {
    return {
      message: "Hello Vue js",
      count: 0,
      name: "",
      users: [],
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
  },
};
</script>

<template>
  <Header />
  <Intro/>
  <Intro2/>
  <div class="container flex justify-end gap-1 my-16">
    <button class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white" >1</button>
    <button class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white">2</button>
    <button class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white">3</button>
    <button class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white">4</button>
    <button class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"><img src="../public/down.png" alt=""></button>
  </div>

  <AfterIntro/>
  <Blog/>
</template>


<style scoped>

</style>
