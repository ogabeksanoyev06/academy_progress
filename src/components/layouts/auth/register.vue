<template>
  <div class="auth__body auth__form">
    <AppText
      :size="isDesktopSmall ? 26 : 30"
      :line-height="isDesktopSmall ? 30 : 36"
      weight="700"
      class="color-main"
      :class="isDesktopSmall ? 'text-center' : ''"
    >
      Ro'yxatdan o'tish
    </AppText>

    <br />

    <BlockWrap
      :count="isMobileSmall ? 1 : isMobileMedium ? 2 : 3"
      offset-x="12"
      offset-y="12"
      class="mb-20"
    >
      <div class="form-group">
        <BaseInput
          v-model="form.name"
          type="text"
          vid="name"
          rules="required|max:255"
          label="Ism"
        />
      </div>
      <div class="form-group">
        <BaseInput
          v-model="form.surname"
          type="text"
          vid="name"
          rules="required|max:255"
          label="Familiya"
        />
      </div>
      <div class="form-group">
        <BaseInput
          v-model="form.phone_number"
          type="text"
          vid="name"
          v-mask="'998-## ### ## ##'"
          rules="required|max:255"
          label="Telefon raqami"
          placeholder="998-931234567"
        />
      </div>
      <div class="form-group">
        <BaseSelect
          :options-prop="classes"
          v-model="regionClass"
          label="* Viloyat"
        />
      </div>
      <div class="form-group">
        <BaseSelect
          :options-prop="classes"
          v-model="regionClass"
          label="* Tuman"
        />
      </div>
      <div class="form-group">
        <BaseSelect
          :options-prop="classes"
          v-model="regionClass"
          label="* Maktab"
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
    </BlockWrap>
    <AppButton
      sides="20"
      class="mb-30"
      font-size="14"
      theme="secondary"
      radius="10"
      @click="registerUser"
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
import BaseSelect from "../../../components/shared-components/BaseSelect";
// import AppRadio from "@/components/shared-components/AppRadio";
// import axios from "axios";

export default {
  name: "AppRegister",
  components: { AppButton, BaseInput, BlockWrap, BaseSelect },
  data() {
    return {
      radios: "",
      form: {
        name: "",
        surname: "",
        phone_number: "",
        client_type: "student",
        password: "",
        viloyat_id: null,
        tumen_id: null,
        school_id: null,
      },
      options: [
        {
          label: "Maktab O'quvchimisiz ?",
          radioValue: "student",
        },
        {
          label: "Maktabni tugatganmisiz ?",
          radioValue: "people",
        },
      ],
      passwordField: false,
      passwordConfirmationField: false,
      classes: [],
      regionClass: 5,
    };
  },
  methods: {
    passwordSee() {
      this.passwordField = !this.passwordField;
    },
    confirmationSee() {
      this.passwordConfirmationField = !this.passwordConfirmationField;
    },
    registerUser() {
      this.loading = true;
      this.$api
        .post("register", this.form)
        .then((res) => {
          if (!res.error) {
            console.log(res);
            this.$router.push({ name: "login" });
            console.log("oxshadi");
          } else {
            console.log("im here baby");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped></style>
