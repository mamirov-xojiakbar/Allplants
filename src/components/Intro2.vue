<template>
  <div class="container mt-14">
    <div class="grid grid-cols-4 gap-10">
      <!-- first grid  -->
      <div class="col-span-1 bg-[#FBFBFB]">
        <h3 class="pt-5 px-5 pb-2 font-bold text-[#3D3D3D] text-[18px]">
          Categories
        </h3>
        <ul v-for="item in plantCategories">
          <li class="flex justify-between px-8">
            <h3 class="py-3 text-[#3D3D3D]">{{ item.name }}</h3>
            <p class="py-3 text-[#3D3D3D]">{{ item.amount }}</p>
          </li>
        </ul>

        <h3 class="pt-5 px-5 font-bold text-[#3D3D3D] text-[18px]">
          Price Range
        </h3>
        <input class="block mx-8 m-5" type="range" />
        <div class="mx-8">
          <span class="text-[#5f5f5f] font-bold">Price:</span>
          <span class="text-[#46A358]"> $39 - $1230</span>
        </div>
        <button
          class="mx-8 my-5 ease-linear font-bold rounded-[6px] bg-[#46A358] text-white px-8 py-2 hover:text-[#46A358] hover:bg-white"
        >
          Filter
        </button>

        <h3 class="pt-5 px-5 font-bold text-[#3D3D3D] text-[18px]">Size</h3>
        <ul v-for="item in plantSizes">
          <li class="flex justify-between px-8">
            <h3 class="py-3 text-[#3D3D3D]">{{ item.name }}</h3>
            <p class="py-3 text-[#3D3D3D]">{{ item.amount }}</p>
          </li>
        </ul>
        <div class="bg-[#46A3581A]">
          <img class="mx-auto" src="../../public/Super_Sale.png" alt="" />
          <h3 class="text-center font-bold text-[23px] text-[#3D3D3D]">
            UP TO 75% OFF
          </h3>
          <img class="mx-auto" src="../../public/floww.png" alt="" />
        </div>
      </div>
      <!-- second grid  -->
      <div class="col-span-3">
        <div class="flex justify-between">
          <div class="flex gap-16">
            <a
              class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]"
              href="#"
              >All plants</a
            >
            <a
              class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]"
              href="#"
              >New Arrivals</a
            >
            <a
              class="text-[18px] text-[#3D3D3D] hover:text-[#46A358] hover:font-bold hover:border-b-4 border-[#46A358]"
              href="#"
              >Sale</a
            >
          </div>

          <div class="flex gap-2 items-center text-[#3D3D3D] text-[18px]">
            <p>Sort by:</p>
            <p>Default sorting</p>
            <img src="../../public/down.png" alt="" />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-x-16 gap-y-[44px] mt-5">
          <Intro_card2 v-for="item in 9" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro_card2 from "./Intro_card2.vue";
export default {
  data() {
    return {
      plantCategories: [
        { name: "House Plants", amount: "(33)" },
        { name: "Potter Plants", amount: "(12)" },
        { name: "Seeds", amount: "(65)" },
        { name: "Small Plants", amount: "(39)" },
        { name: "Big Plants", amount: "(23)" },
        { name: "Succulents", amount: "(17)" },
        { name: "Terrariums", amount: "(19)" },
        { name: "Gardening", amount: "(13)" },
        { name: "Accessories", amount: "(18)" },
      ],
      plantSizes : [
  { name: "Small", amount: "(119)" },
  { name: "Medium", amount: "(86)" },
  { name: "Large", amount: "(78)" }
]
    };
  },

  components: {
    Intro_card2,
  },
};
</script>

<style lang="scss" scoped></style>
