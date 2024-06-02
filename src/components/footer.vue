<template>
  <div class="container bg-[#FBFBFB] mt-[100px]">
    <div class="flex p-10 justify-between gap-10">

      <div v-for="(item, index) in arr" :key="index" class="divide-x-2 w-[50%]">
        <div class="mr-[50px]">
          <img :src="item.img" alt=""/>
          <p class="font-bold text-[17px] leading-[16px] mt-[20px]">{{ item.name }}</p>
          <p class="font-normal text-[14px] leading-[22px] mt-[10px]">{{ item.title }}</p>
        </div>
      </div>

      <div class="w-[80%]">
          <p class="font-bold text-[18px] leading-[16px]">Would you like to join newsletters?</p>
          <div class="flex mb-[20px] mt-[20px]">
            <input type="text" placeholder="enter your email address..." class="focus:outline-none font-normal text-[14px] leading-[16px] py-[12px] px-[12px] w-full"/>
            <button class="bg-[#46A358] text-white font-bold text-[18px] leading-[16px] py-[12px] px-[26px]">Join</button>
          </div>
          <p class="font-normal text-[13px] leading-[22px]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
      </div>
    </div>

    <div class="flex gap-[100px] pt-[26px] pb-[20px] pl-[23px] bg-[#46A3581A]">
        <img src="../../public/Logo.png" alt="" class="w-[150px] h-[34.3px]">
        <div class="flex items-center gap-3">
            <img src="../../public/Location.png" alt="" class="">
            <div>
                <p class="font-normal text-[14px] leading-[22px]">70 West Buckingham Ave.</p>
                <p class="font-normal text-[14px] leading-[22px]"> Farmingdale, NY 11735</p>
            </div>
        </div>
        <div class="flex items-center gap-3">
            <img src="../../public/Message.png" alt="">
            <p class="font-normal text-[14px] leading-[22px]">contact@greenshop.com</p>
        </div>
        <div class="flex items-center gap-3">
            <img src="../../public/Calling.png" alt="">
            <p class="font-normal text-[14px] leading-[22px]">+88 01911 717 490</p>
        </div>
    </div>

    <div class="flex gap-[180px] pt-[33px] pb-[20px] pl-[23px]">
        <div>
            <p class="font-bold text-[18px] leading-[16px]">My Account</p>
            <p class="font-normal text-[14px] leading-[30px]">My Account</p>
            <p class="font-normal text-[14px] leading-[30px]">Our stores</p>
            <p class="font-normal text-[14px] leading-[30px]">Contact us</p>
            <p class="font-normal text-[14px] leading-[30px]">Career</p>
            <p class="font-normal text-[14px] leading-[30px]">Specials</p>
        </div>

        <div>
            <p class="font-bold text-[18px] leading-[16px]">Help & Guide</p>
            <p class="font-normal text-[14px] leading-[30px]">Help Center</p>
            <p class="font-normal text-[14px] leading-[30px]">How to Buy</p>
            <p class="font-normal text-[14px] leading-[30px]">Shipping & Delivery</p>
            <p class="font-normal text-[14px] leading-[30px]">Product Policy</p>
            <p class="font-normal text-[14px] leading-[30px]">How to Return</p>
        </div>

        <div>
            <p class="font-bold text-[18px] leading-[16px]">Categories</p>
            <p class="font-normal text-[14px] leading-[30px]">House Plants</p>
            <p class="font-normal text-[14px] leading-[30px]">Potter Plants</p>
            <p class="font-normal text-[14px] leading-[30px]">Seeds</p>
            <p class="font-normal text-[14px] leading-[30px]">Small Plants</p>
            <p class="font-normal text-[14px] leading-[30px]">Accessories</p>
        </div>

        <div>
            <p class="font-bold text-[18px] leading-[16px] mb-[20px]">Social Media</p>
            <div class="flex justify-between">
                <p class="border p-[7px] rounded-[5px]"><img src="../../public/Facebook.png" alt=""></p>
                <p class="border p-[7px] rounded-[5px]"><img src="../../public/Instagram.png" alt=""></p>
                <p class="border p-[7px] rounded-[5px]"><img src="../../public/Twitter.png" alt=""></p>
                <p class="border p-[7px] rounded-[5px]"><img src="../../public/Linkedin.png" alt=""></p>
                <p class="border p-[7px] rounded-[5px]"><img src="../../public/Union.png" alt=""></p>
            </div>
            <p class="font-bold text-[18px] leading-[16px] mb-[13px] mt-[33px]">We accept</p>
            <img src="../../public/image 16 (1).png" alt="">
        </div>
    </div>
  </div>
</template>

<script setup>
import Group18 from "../../public/Group 18.png";
import Group19 from "../../public/Group 19.png";
const arr = [
  {
    img: Group18,
    name: "Garden Care",
    title:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: Group19,
    name: "Plant Renovation",
    title:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: Group18,
    name: "Garden Care",
    title:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];
</script>

<style lang="scss" scoped></style>
