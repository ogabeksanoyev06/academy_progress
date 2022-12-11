<template>
  <div class="general-information">
    <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
      Asosiy malumotlar
    </AppText>
    <div class="cabinet__content">
      <div class="grid-block mb-10">
        <div class="cabinet__content-item">
          <app-text>Rasm (.jpg, .jpeg, .png)</app-text>
          <div class="account__photo mb-20">
            <div class="account__photo-wrap">
              <transition name="fade">
                <div class="account__photo-empty" v-if="!hasImage">
                  <!-- <img :src="baseURL + user.photo" alt="" /> -->
                </div>
              </transition>
              <transition name="fade">
                <image-uploader
                  :preview="true"
                  :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                  capture="environment"
                  :debug="1"
                  doNotResize="gif"
                  :autoRotate="true"
                  outputFormat="file"
                >
                  <label for="fileInput" slot="upload-label">
                    <span class="upload-caption">
                      <app-text
                        class="pa-10"
                        weight="500"
                        size="16"
                        line-height="24"
                      >
                        Yuklash
                      </app-text>
                    </span>
                  </label>
                </image-uploader>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-block mb-10">
        <div class="cabinet__content-item">
          <BaseInput
            label="Ism"
            v-model="firstName"
            type="text"
            vid="name"
            rules="required|max:255"
          />
        </div>
        <div class="cabinet__content-item">
          <BaseInput
            label="Familiya"
            v-model="lastName"
            type="text"
            vid="name"
            rules="required|max:255"
          />
        </div>
        <div class="cabinet__content-item">
          <BaseInput
            label="Login"
            type="text"
            vid="name"
            rules="required|max:255"
            v-model="login"
          />
        </div>
      </div>
      <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
        Parolni o'zgartirish
      </AppText>

      <div class="grid-block mb-20">
        <div class="cabinet__content-item">
          <BaseInput
            v-model="password"
            type="text"
            vid="name"
            rules="required|max:255"
            label="Eski parol"
          >
            <template #append>
              <img src="/icons/eye.svg" style="padding: 10px 20px" alt="" />
            </template>
          </BaseInput>
        </div>

        <div class="cabinet__content-item">
          <BaseInput
            v-model="newPassword"
            type="text"
            vid="name"
            rules="required|max:255"
            label="Yangi parol"
          >
            <template #append>
              <img src="/icons/eye.svg" style="padding: 10px 20px" alt="" />
            </template>
          </BaseInput>
        </div>
      </div>

      <AppButton sides="20" theme="secondary">
        O'zgarishlarni saqlash
      </AppButton>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../../components/shared-components/BaseInput";
import AppButton from "../../../components/shared-components/AppButton";
import ImageUploader from "vue-image-upload-resize";

import { mapGetters } from "vuex";

export default {
  name: "general-information",
  components: { AppButton, BaseInput, ImageUploader },
  data() {
    return {
      hasImage: false,
      login: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      newPassword: "",
    };
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    changePhoto(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped></style>
