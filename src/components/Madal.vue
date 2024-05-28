<template>
  <div>
    <div @click="closeMadal" class="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>

    <div
      class="fixed md:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white pt-[10px] p-7 rounded"
    >
      <div class="flex justify-end">
        <button @click="closeMadal" class="font-medium text-[30px] text-[#46A358]">&times;</button>
      </div>

      <div class="flex divide-x-2 justify-center">
        <button
          @click="content = 'login'"
          class="py-1 px-5 hover:text-[#46A358] text-[20px] font-medium"
        >
          Login
        </button>
        <button
          @click="content = 'register'"
          class="py-1 px-5 hover:text-[#46A358] text-[20px] font-medium"
        >
          Register
        </button>
      </div>



        <div v-if="content == 'login'" class="flex flex-wrap">
          <p class="mt-[50px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
          </p>
          <p class="mt-[26px] text-center text-[#A5A5A5] text-[14px] w-[100%]">
            almamun_uxui@outlook.com
          </p>
          <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[60%] mt-[30px]"
          />
          <a
            href="mailto:youremail@example.com"
            class="mt-[14px] text-[#46A358] leading-[14px] w-[60%] text-right mx-auto cursor-pointer"
          >
            Forgot Password?
          </a>

          <button
            class="px-[100px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto"
          >
            Login
          </button>
          <p class="mt-[36px] text-[13px] w-[60%] mx-auto text-center">
            Or login with
          </p>
          <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Login with Google
          </p>
          <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Login with Facebook
          </p>
        </div>
      

        <div v-if="content == 'register'" class="flex flex-wrap">
            <p class="mt-[20px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
            </p>
            <input
            placeholder="Username"
            type="text"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-[14px]"
            />
            <input
            placeholder="Email"
            type="email"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
            />
            <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
            />
            <input
            placeholder="Confirm Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
            />
            <button
            class="px-[100px] py-[14px] text-[16px] font-medium text-[#fff] text-center border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto"
            >
            Register
            </button>
            <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Or register with
            </p>
            <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">
            Register with Google
            </p>
            <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">
            Register with Facebook
            </p>
        </div>
    

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "login",
    };
  },
  methods: {
    closeMadal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
