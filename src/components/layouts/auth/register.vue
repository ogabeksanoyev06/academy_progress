<template>
  <div class="auth__body auth__form">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class=""
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Ro'yxatdan o'tish
    </AppText>
    <br />
    <div class="form-group">
      <BaseInput
        v-model="form.firstName"
        type="text"
        vid="name"
        rules="required|max:255"
        label="Ism"
      />
    </div>
    <div class="form-group">
      <BaseInput
        v-model="form.lastName"
        type="text"
        vid="name"
        rules="required|max:255"
        label="Familiya"
      />
    </div>
    <div class="form-group">
      <BaseInput
        v-model="form.login"
        type="text"
        vid="name"
        v-mask="'998-#########'"
        rules="required|max:255"
        label="Telefon raqami"
        placeholder="998-931234567"
      />
    </div>
    <div class="form-group">
      <BaseInput
        v-model="form.password"
        :type="passwordField ? 'text' : 'password'"
        vid="name"
        rules="required|max:255"
        label="Parol"
      >
        <template #append>
          <img
            src="/icons/eye.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="passwordSee"
            v-if="passwordField"
          />
          <img
            src="/icons/eye-closed2.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="passwordSee"
            v-if="!passwordField"
          />
        </template>
      </BaseInput>
    </div>
    <div class="form-group">
      <BaseInput
        v-model="form.passwordConfirmation"
        :type="passwordConfirmationField ? 'text' : 'password'"
        vid="name"
        rules="required|max:255"
        label="Parolni takrorlang"
      >
        <template #append>
          <img
            src="/icons/eye.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="confirmationSee"
            v-if="passwordConfirmationField"
          />
          <img
            src="/icons/eye-closed2.svg"
            style="padding: 10px 20px; cursor: pointer"
            alt=""
            @click="confirmationSee"
            v-if="!passwordConfirmationField"
          />
        </template>
      </BaseInput>
    </div>
    <BlockWrap
      :count="isDesktopSmall ? 1 : 2"
      offset-y="20"
      offset-x="5"
      width-auto=""
      class="mb-30"
    >
      <BaseCheckbox title="Roziman" size="18" />
      <span class="weight-700" style="color: #008ae4 !important">
        Qoidalar & Shartlarga
      </span>
    </BlockWrap>
    <AppButton
      sides="20"
      class="w-100 mb-30"
      font-size="14"
      theme="secondary"
      radius="10"
    >
      Ro'yxatdan o'tish
    </AppButton>
    <AppText
      size="14"
      weight="700"
      line-height="17"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Akkountingiz bormi ?
      <router-link
        style="color: #008ae4 !important; margin-left: 5px"
        to="/sign-in"
      >
        Tizimga kiring
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
  name: "AppRegister",
  components: { AppButton, BaseInput, BaseCheckbox, BlockWrap },
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        telefon: null,
        login: "",
        password: "",
        passwordConfirmation: "",
      },
      passwordField: false,
      passwordConfirmationField: false,
    };
  },
  methods: {
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
  },
};
</script>
<style scoped></style>
