<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import user1 from "../../public/userimg.png";
import user2 from "../../public/userimg2.png";
import user3 from "../../public/userimg3.png";
import image8 from "../../public/image8.png"
import image13 from "../../public/image 1 (3).png"
import { ref } from "vue";
import ReletedProducts from "../components/releted-products.vue";

const route = useRoute();
const isDescriptionActive = ref(true);

const showDescription = () => {
  isDescriptionActive.value = true;
};

const showReviews = () => {
  isDescriptionActive.value = false;
};
const users = reactive([
  {
    id: 1,
    img: user1,
    name: "Leanardo",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam voluptateminus distinctio ipsa, repellat optio error, vero consequuntur fuga, unde earum excepturi consequatur atque maxime doloremque. Labore, iusto voluptate?",
  },
  {
    id: 2,
    img: user2,
    name: "Lusy",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam voluptateminus distinctio ipsa, repellat optio error, vero consequuntur fuga, unde earum excepturi consequatur atque maxime doloremque. Labore, iusto voluptate?",
  },
  {
    id: 3,
    img: user3,
    name: "Nikol",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam voluptateminus distinctio ipsa, repellat optio error, vero consequuntur fuga, unde earum excepturi consequatur atque maxime doloremque. Labore, iusto voluptate?",
  },
]);
</script>

<template>
  <div class="container">
    <div class="flex mt-[100px] gap-[52px]">
      <div class="bg-[#FBFBFB] py-[40px] px-[100px]">
        <img :src="route.params.img" alt="" class="w-[600px] h-[350px]" />
      </div>

      <div>
        <p class="font-bold text-[28px] leading-[16px]">
          {{ route.params.title }}
        </p>

        <div
          class="flex justify-between mt-[21px] border-b-[1px] border-[#46A35880] pb-[13px]"
        >
          <p class="font-semibold text-[22px] leading-[16px] text-[#46A358]">
            ${{ route.params.price }}
          </p>
          <img src="../../public/Group 40.png" alt="" />
        </div>

        <p class="mt-[15px] font-medium text-[15px] leading-[16px] mb-[10px]">
          Short Description:
        </p>

        <p
          class="text-[#727272] font-normal text-[14px] leading-[24px] mb-[25px]"
        >
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </p>

        <p class="font-medium text-[15px] leading-[16px] mb-[15px]">Size:</p>
        <div class="flex gap-5 box-border">
          <p
            class="hover:font-bold hover:text-[18px] leading-[16px] text-[14px] font-medium cursor-auto border px-[10px] py-[6px] rounded-[50%] hover:border-[#46A358] hover:text-[#46A358]"
          >
            S
          </p>
          <p
            class="hover:font-bold hover:text-[18px] leading-[16px] text-[14px] font-medium cursor-auto border px-[8px] py-[6px] rounded-[50%] hover:border-[#46A358] hover:text-[#46A358]"
          >
            M
          </p>
          <p
            class="hover:font-bold hover:text-[18px] leading-[16px] text-[14px] font-medium cursor-auto border px-[10px] py-[6px] rounded-[50%] hover:border-[#46A358] hover:text-[#46A358]"
          >
            L
          </p>
          <p
            class="hover:font-bold hover:text-[18px] leading-[16px] text-[14px] font-medium cursor-auto border px-[7px] py-[6px] rounded-[50%] hover:border-[#46A358] hover:text-[#46A358]"
          >
            XL
          </p>
        </div>

        <div class="flex mt-[25px] mb-[25px] items-center">
          <p
            class="font-normal text-[20px] leading-[10px] bg-[#46A358] text-white px-[10px] pb-3 pt-2 rounded-[40%] mt-2"
          >
            -
          </p>
          <p class="font-normal text-[20px] leading-[10px] pt-2 mx-5">1</p>
          <p
            class="font-normal text-[20px] leading-[10px] bg-[#46A358] text-white px-2 pb-3 pt-2 rounded-[40%] mt-2"
          >
            +
          </p>

          <button
            class="hover:bg-[#46A358] border-[#46A358] border py-[10px] px-[32px] rounded-[10px] text-[#46A358] hover:text-white font-bold text-[14px] leading-[20px] ml-[25px]"
          >
            BUY NOW
          </button>
          <button
            class="hover:bg-[#46A358] border-[#46A358] border py-[10px] px-[32px] rounded-[10px] text-[#46A358] hover:text-white font-bold text-[14px] leading-[20px] ml-[10px]"
          >
            ADD TO CARD
          </button>

          <button
            class="border-[#46A358] border py-[10px] px-[10px] rounded-[10px] text-[#46A358] hover:text-white font-bold text-[14px] leading-[20px] ml-[10px]"
          >
            <img src="../../public/heart 1.png" alt="" />
          </button>
        </div>

        <p class="font-normal text-[15px] leading-[16px] mb-[10px]">
          <span class="text-[#727272]">SKU:</span> 1995751877966
        </p>
        <p class="font-normal text-[15px] leading-[16px] mb-[10px]">
          <span class="text-[#727272]">Categories:</span> Potter Plants
        </p>
        <p class="font-normal text-[15px] leading-[16px] mb-[20px]">
          <span class="text-[#727272]">Tags:</span> Home, Garden, Plants
        </p>
        <div class="flex gap-5 items-center">
          <p class="text-[#3D3D3D] font-medium text-[15px] leading-[16px]">
            Share this products:
          </p>
          <img src="../../public/Facebook (1).png" alt="" />
          <img src="../../public/Twitter (1).png" alt="" />
          <img src="../../public/Linkedin (1).png" alt="" />
          <img src="../../public/Message.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="mt-[92px]">
      <div class="flex gap-[30px] border-b border-b-[#46A35880]">
        <button
          class="hover:text-[#46A358] hover:font-bold text-[17px] leading-[16px] font-normal hover:border-b-2 pb-[12px] hover:border-b-[#46A358] focus:border-b-[#46A358] focus:text-[#46A358] focus:border-b-2 focus:font-bold"
          @click="showDescription"
          :class="{
            'text-[#46A358] font-bold border-b-2 border-b-[#46A358]':
              isDescriptionActive,
          }"
        >
          Product Description
        </button>
        <button
          class="hover:text-[#46A358] hover:font-bold text-[17px] leading-[16px] font-normal hover:border-b-2 pb-[12px] hover:border-b-[#46A358] focus:border-b-[#46A358] focus:text-[#46A358] focus:border-b-2 focus:font-bold"
          @click="showReviews"
          :class="{
            'text-[#46A358] font-bold border-b-2 border-b-[#46A358]':
              !isDescriptionActive,
          }"
        >
          Reviews (19)
        </button>
      </div>

      <div
        v-if="isDescriptionActive"
        class="mt-[18px] text-[#727272] font-normal text-[14px] leading-[24px]"
      >
        <p class="mb-[30px]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
          est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
          ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
          adipiscing cursus eu, suscipit id nulla.
        </p>
        <p class="mb-[20px]">
          Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
          sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
          Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
          vulputate, sapien libero hendrerit est, sed commodo augue nisi non
          neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
          accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
          luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
          euismod eget. The ceramic cylinder planters come with a wooden stand
          to help elevate your plants off the ground.
        </p>

        <p class="text-[#3D3D3D] font-bold text-[14px] leading-[24px]">
          Living Room:
        </p>

        <p class="mb-[20px]">
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>

        <p class="text-[#3D3D3D] font-bold text-[14px] leading-[24px]">
          Dining Room:
        </p>

        <p class="mb-[20px]">
          The benefits of houseplants are endless. In addition to cleaning the
          air of harmful toxins, they can help to improve your mood, reduce
          stress and provide you with better sleep. Fill every room of your home
          with houseplants and their restorative qualities will improve your
          life.
        </p>

        <p class="text-[#3D3D3D] font-bold text-[14px] leading-[24px]">
          Office:
        </p>

        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div
        v-if="!isDescriptionActive"
        class="mt-[28px] text-[#727272] font-normal text-[14px] leading-[24px] flex gap-20"
      >
        <div v-for="(review, index) in users" :key="index" class="mb-[20px]">
          <div class="flex items-center mb-[10px]">
            <img
              :src="review.img"
              alt=""
              class="w-[40px] h-[40px] rounded-full mr-[10px]"
            />
            <p class="font-bold">{{ review.name }}</p>
          </div>
          <p>{{ review.comment }}</p>
        </div>
      </div>
    </div>

    <ReletedProducts />
  </div>
</template>

<style lang="scss" scoped></style>
