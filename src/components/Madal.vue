<template>
  <div>
    <div
      @click="closeMadal"
      class="fixed bg-black/60 top-0 left-0 w-full h-screen"
    ></div>

    <div
      class="fixed md:w-[500px] w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white pt-[10px] md:p-7 p-2 rounded"
    >

      <div class="flex justify-end">
        <button
          @click="closeMadal"
          class="font-medium text-[30px] text-[#46A358]"
        >
          &times;
        </button>
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
        <p class="mt-[20px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
          Enter your username and password to login.
        </p>
        <div class="md:ml-[90px] ml-[35px] mt-[20px]">
          <input
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto md:w-[265px] md:mt-[10px]"
            type="email"
            placeholder="some@email.com"
          />
        </div>
        <input
          placeholder="Password"
          type="password"
          name=""
          id=""
          class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto md:w-[60%] mt-[30px]"
        />
        <a
          href="mailto:youremail@example.com"
          class="mt-[14px] text-[#46A358] leading-[14px] md:w-[60%] text-right mx-auto cursor-pointer"
        >
          Forgot Password?
        </a>

        <button
          class="px-[100px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] md:w-[60%] mx-auto"
        >
          Login
        </button>
        <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
          Or login with
        </p>
        <div class="">
          <button
            class="flex gap-2 items-center md:py-4 py-1 px-[50px] text-center border rounded md:ml-[90px] ml-[10px] mt-[20px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_990)">
                <path
                  d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
                  fill="#59C36A"
                />
                <path
                  d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
                  fill="#00A66C"
                />
                <path
                  d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
                  fill="#FFDA2D"
                />
                <path
                  d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
                  fill="#4086F4"
                />
                <path
                  d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
                  fill="#4175DF"
                />
                <path
                  d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
                  fill="#FF641A"
                />
                <path
                  d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
                  fill="#F03800"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_990">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Login with Google
          </button>
        </div>
        <button
          class="flex gap-2 md:py-4 py-1 px-[42px] ml-[10px] text-center border rounded md:ml-[90px] mt-[20px] items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_1018)">
              <path
                d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
                fill="#3B5999"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_1018">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Facebook
        </button>
      </div>

      <div v-if="content == 'register'" class="flex flex-wrap">
        <p class="mt-[10px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
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
          class="md:px-[100px] py-[14px] text-[16px] font-medium text-[#fff] text-center border rounded-md bg-[#46A358] mt-[20px] w-[60%] mx-auto"
        >
          Register
        </button>
        <p class="mt-[15px] text-[13px] w-[60%] mx-auto text-center">
          Or register with
        </p>
        <div class="">
          <button
            class="flex gap-2 items-center md:py-4 py-1 px-[50px] text-center border rounded md:ml-[90px] ml-[10px] mt-[20px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9_990)">
                <path
                  d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
                  fill="#59C36A"
                />
                <path
                  d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
                  fill="#00A66C"
                />
                <path
                  d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
                  fill="#FFDA2D"
                />
                <path
                  d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
                  fill="#4086F4"
                />
                <path
                  d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
                  fill="#4175DF"
                />
                <path
                  d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
                  fill="#FF641A"
                />
                <path
                  d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
                  fill="#F03800"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_990">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Login with Google
          </button>
        </div>
        <button
          class="flex gap-2 md:py-4 py-1 px-[42px] ml-[10px] text-center border rounded md:ml-[90px] mt-[20px] items-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_1018)">
              <path
                d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
                fill="#3B5999"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_1018">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Login with Facebook
        </button>
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
