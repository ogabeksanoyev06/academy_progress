<template>
  <div class="app-card" :class="{ 'news-card--medium': medium }">
    <div class="app-card__photo">
      <img :src="photo" :alt="title" />
      <div class="app-card__price" v-if="price !== ''">
        <h5>{{ price }}</h5>
      </div>
    </div>
    <div class="app-card__content">
      <div>
        <app-text
          :size="isMobile ? 16 : 18"
          class="app-card__title color-secondary mb-10"
          max-lines="2"
          line-height="24"
          weight="700"
          tag="h3"
        >
          {{ title }}
        </app-text>
        <app-text
          class="color-text"
          size="14"
          line-height="20"
          weight="500"
          max-lines="4"
        >
          {{ subtitle }}
        </app-text>
      </div>
      <div class="app-card__link" @click="goToLink">
        <img src="/icons/angle-right.svg" style="max-width: 16px" />
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/components/app-card.scss";

export default {
  name: "AppCard",
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
