<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import user1 from "../../public/userimg.png";
import user2 from "../../public/userimg2.png";
import user3 from "../../public/userimg3.png";
import image8 from "../../public/image8.png"
import image13 from "../../public/image 1 (3).png"
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "../../src/carusel.css";
import { Pagination } from "swiper/modules";
import { ref } from "vue";

const modules = ref([Pagination])

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

<template>
    <div class="container">
        <div class="mt-[127px]">
            <div class="w-full border-b mb-[44px] border-b-[#46A35880]">
                <p class="font-bold text-[17px] leading-[16px] text-[#46A358] mb-[12px]">Releted Products</p>
            </div>
            <swiper
                :slidesPerView="5"
                :spaceBetween="30"
                :pagination="{ clickable: true }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="item in products" :key="item.id">
                <router-link :to="{ name: 'product', params: { id: item.id, img: item.img, title: item.title, price: item.price }}">
                    <div class="bg-[#FBFBFB]">
                    <img class="mx-auto mb-4 py-[42px]" :src="item.img" alt="Barberton Daisy" />
                    </div>
                    <h3 class="text-[19px] text-[#3D3D3D]">{{ item.title }}</h3>
                    <p class="text-[20px] text-[#46A358] font-bold mb-[50px]">{{ item.price }}</p>
                </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>