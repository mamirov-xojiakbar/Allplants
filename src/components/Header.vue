<template>
  <div class="md:container ml-[5px] mr-[5px]">
    <div class="flex justify-between items-center py-8 border-b border-b-[#46A35880]">
      
      <div class="flex items-center gap-2">
        <img src="../../public/Vector (5).png" alt="" />
        <p class="text-[#46A358] font-bold">GREENSHOP</p>
      </div>


      <div class="md:flex md:justify-between md:items-center md:gap-20 hidden">
        <router-link to="/" class="font-normal text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold">Home</router-link>
        <router-link to="/shop" class="font-normal text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold">Shop</router-link>
        <a href="#" class="text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold">Plant Care</a>
        <a href="#" class="font-normal text-[#3D3D3D] hover:text-[#3D3D3D] hover:font-bold">Blogs</a>
      </div>



      <div class="flex justify-between items-center gap-6">
        <img src="../../public/loop.png" alt="" class="md:block hidden"/>
        <router-link to="/cart" class="relative pr-2">
            <img src="../../public/korzina.png" alt="" />
            <div
              class="font-serif absolute px-[5px] border-[3px] rounded-full text-[#fff] bg-[#46A358] text-[10px] top-[-4px] right-[-2px]"
            >
              6
            </div>
        </router-link>
        <button @click="$emit('login-clicked')" class="bg-[#46A358] flex items-center gap-2 px-5 py-2 rounded-[6px]">
          <img src="../../public/Logout.png" alt="" />
          <span class="text-[#fff]">Login</span>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Header',
  // No need for script content as we're only emitting an event
};
</script>

<style lang="scss" scoped></style>
