<template>
  <div class="container">
    <div class="flex gap-[86px] pt-[100px]">
      <div class="w-[65%]">
        <div class="flex gap-[260px] pr-[23px] border-b pb-[11px] border-b-[#46A35880]">
          <p class="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Products</p>
          <div class="flex gap-[115px]">
            <p class="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Price</p>
            <p class="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Quantity</p>
            <p class="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Total</p>
          </div>
        </div>

        <div class="flex items-center mt-[11px] bg-[#FBFBFB] pr-[23px] mb-[10px]" v-for="item in 2">
          <img
            src="../../public/image 1 (3).png"
            alt=""
            class="w-[70px] h-[70px]"
          />

          <div class="ml-[14px] mr-[98px]">
            <p class="font-medium text-[16px] leading-[16px] mb-[6px]">
              Barberton Daisy
            </p>
            <p class="font-normal text-[14px] leading-[16px] text-[#727272]">
              SKU: 1995751877966
            </p>
          </div>

          <p
            class="font-medium text-[16px] leading-[16px] mr-[92px] text-[#727272]"
          >
            $119.00
          </p>

          <div class="flex mr-[82px] items-center">
            <p
              class="cursor-pointer font-normal text-[20px] leading-[16px] bg-[#46A358] text-white px-[10px] pt-[5px] pb-2 rounded-[40%] mt-2"
            >
              -
            </p>
            <p class="font-normal text-[17px] leading-[10px] pt-2 mx-5">1</p>
            <p
              class="cursor-pointer font-normal text-[20px] leading-[16px] bg-[#46A358] text-white px-2 py-[7px] rounded-[40%] mt-2"
            >
              +
            </p>
          </div>

          <p class="font-bold text-[16px] leading-[16px] text-[#46A358] mr-[50px]">$238.00</p>
          <img src="../../public/Delete.png" alt="" />
        </div>
      </div>

      <div class="w-[30%]">
        <div class="border-b-[#46A35880] border-b">
          <p class="text-[18px] font-bold leading-[16px] text-[#3D3D3D] pb-[11px]">Cart Totals</p>
        </div>

        <p class="mt-[11px] font-normal text-[14px] leading-[16px]">Coupon Apply</p>

        <div class="mt-[8px] border border-[#46A358] rounded-[3px] flex justify-between mb-[42px]">
          <input type="text" class="focus:outline-none py-[12px] px-[9px] text-[#A5A5A5] text-[14px] font-normal leading-[15px]" placeholder="Enter coupon code here..."/>
          <button class="bg-[#46A358] py-[12px] pl-[35px] pr-[25px] text-white text-[15px] font-bold leading-[16px]">Apply</button>
        </div>

        <div class="flex justify-between mb-[15px]">
          <p class="text-[15px] font-normal leading-[16px]">Subtotal</p>
          <p class="text-[18px] font-medium leading-[16px]">$2,683.00</p>
        </div>

        <div class="flex justify-between mb-[21px]">
          <p class="text-[15px] font-normal leading-[16px]">Coupon Discount</p>
          <p class="text-[15px] font-normal leading-[16px]">(-) 00.00</p>
        </div>

        <div class="flex justify-between mb-[26px]">
          <p class="text-[15px] font-normal leading-[16px]">Shiping</p>
          <div class="text-right">
            <p class="text-[15px] font-normal leading-[16px]">$16.00</p>
            <p class="text-[12px] font-normal leading-[16px] text-[#46A358] mt-[8px]">View shipping charge</p>
          </div>
        </div>

        <div class="flex justify-between mb-[29px]">
          <p class="text-[16px] font-bold leading-[16px]">Total</p>
          <p class="text-[18px] font-medium leading-[16px] text-[#46A358]">$2,699.00</p>
        </div>

        <div class="w-full text-center">
            <button class="bg-[#46A358] text-[15px] font-bold leading-[16px] text-white py-[12px] w-full mb-[14px]">Proceed To Checkout</button>
            <p class="text-[15px] font-normal leading-[16px] text-[#46A358]">Continue Shopping</p>
        </div>
      </div>
    </div>

    <ReletedProducts />
  </div>
</template>

<script setup lang="ts">
import ReletedProducts from "../components/releted-products.vue";
</script>

<style scoped></style>
