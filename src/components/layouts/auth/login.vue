<template>
  <div class="auth__body auth__form">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="mb-30 color-main"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Tizimga kirish <span>{{ errorMes }}</span>
    </AppText>
    <BlockWrap
      :count="isMobileSmall ? 1 : 2"
      offset-x="12"
      offset-y="12"
      class="mb-20"
    >
      <div class="form-group mt-5">
        <BaseInput
          v-model="request.login"
          type="text"
          vid="name"
          v-mask="'998-#########'"
          rules="required|max:255"
          label="Telefon raqami"
          placeholder="998-991234567"
        />
      </div>
      <div class="form-group mt-5">
        <BaseInput
          v-model="request.password"
          label="Parol"
          :type="showPassword ? 'text' : 'password'"
          vid="name"
          rules="required|max:255"
        >
          <template #append>
            <img
              src="/icons/eye.svg"
              style="padding: 10px 20px; cursor: pointer"
              alt=""
              @click="showPasswordMethod"
              v-if="showPassword"
            />
            <img
              src="/icons/eye-closed2.svg"
              style="padding: 10px 20px; cursor: pointer"
              alt=""
              @click="showPasswordMethod"
              v-if="!showPassword"
            />
          </template>
        </BaseInput>
      </div>
    </BlockWrap>

    <BlockWrap
      :count="isDesktopSmall ? 1 : 2"
      offset-y="20"
      offset-x="20"
      class="mb-30"
    >
      <BaseCheckbox
        title="Eslab qolish"
        size="18"
        type="checkbox"
        vid="name"
        rules="required|max:255"
      />

      <router-link
        to="/"
        class="weight-700 text-right"
        style="color: #008ae4 !important"
      >
        Parolni unutdingizmi
      </router-link>
    </BlockWrap>

    <AppButton
      sides="20"
      class="mb-30"
      font-size="14"
      theme="secondary"
      radius="10"
    >
      Kirish
    </AppButton>
    <AppText
      size="14"
      weight="700"
      line-height="17"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Ro'yxatdan o'tmadingizmi?
      <router-link
        style="color: #008ae4 !important; margin-left: 5px"
        to="/sign-up"
      >
        Ro'yxatdan o'tish
      </router-link>
    </AppText>
  </div>
</template>
<script>
import AppButton from "../../shared-components/AppButton";
import BaseInput from "../../shared-components/BaseInput";
import BlockWrap from "../../shared-components/BlockWrap";
import BaseCheckbox from "../../shared-components/BaseCheckbox";
export default {
  name: "AppLogin",
  components: { BaseInput, AppButton, BaseCheckbox, BlockWrap },
  data() {
    return {
      request: {
        login: "",
        password: "",
        client_id: 1,
      },
      errorMes: "",
      authError: "",
      showPassword: false,
    };
  },
  methods: {
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style lang="scss" scoped>
.auth {
  &__body {
    max-width: 800px;
    width: 100%;
  }
}
</style>
