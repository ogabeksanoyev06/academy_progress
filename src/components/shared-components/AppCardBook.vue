<template>
  <div class="app-card-book" :class="{ 'news-card--medium': medium }">
    <div class="app-card-book__photo">
      <img :src="photo" :alt="title" />
    </div>
    <div class="app-card-book__content">
      <app-text
        class="app-card-book__title color-text mb-10"
        size="16"
        line-height="25"
        weight="500"
        max-lines="2"
      >
        {{ subtitle }}
      </app-text>
      <app-text
        class="color-text mb-20"
        size="16"
        line-height="25"
        weight="500"
        max-lines="2"
      >
        Muallif: <span class="color-main">{{ title }}</span>
      </app-text>
      <div>
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex">
            <div class="d-flex align-center mr-20">
              <img src="/icons/star.svg" alt="" class="mr-5" />
              <app-text class="color-text" size="14" weight="500">
                2.8
              </app-text>
            </div>
            <div class="d-flex align-center">
              <img src="/icons/eye-2.svg" alt="" class="mr-5" />
              <app-text class="color-text" size="14" weight="500">
                666
              </app-text>
            </div>
          </div>
          <div class="app-card-book__link" @click="goToLink">
            <app-text
              class="color-main mr-5"
              size="18"
              line-height="30"
              weight="700"
            >
              O'qing
            </app-text>
            <img src="/icons/angle-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/components/app-card-book.scss";

export default {
  name: "AppCardBook",
  components: {},
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
    medium: Boolean,
    value: null,
    price: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: this.link,
        params: { course_id: this.id },
      });
    },
  },
};
</script>

<style scoped></style>
