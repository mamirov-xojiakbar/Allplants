<template>
   <router-link :to="{name: 'product', params: {id: item.id, img: item.img, title: item.title, price: item.price}}" v-for="item in products" :key="item.id">
      <div>
        <div class="bg-[#FBFBFB]">
          <img class="mx-auto mb-4 py-[42px]" :src="item.img" alt="Barberton Daisy" />
        </div>
        <h3 class="text-[19px] text-[#3D3D3D]">{{ item.title }}</h3>
        <p class="text-[20px] text-[#46A358] font-bold">{{ item.price }}</p>
      </div>
   </router-link>
</template>

<script setup>
import { reactive } from "vue";
import image8 from "../../public/image8.png"
import image13 from "../../public/image 1 (3).png"

const products = reactive([
  {
    id: 1,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 2,
    img: image13,
    title: "Barberton Daisy",
    price: '2000.00'
  },
  {
    id: 3,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 4,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 5,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 6,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 7,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 8,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
  {
    id: 9,
    img: image8,
    title: "Barberton Daisy",
    price: '119.00'
  },
])
</script>

<style lang="scss" scoped>
</style>
