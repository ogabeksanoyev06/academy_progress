<template>
  <section class="section py-40">
    <div class="section__top mb-30">
      <app-text
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
        class="color-secondary"
      >
        Testlar
      </app-text>
      <div class="section__top-details">
        <!-- <router-link class="section__top-link" to="/">Barchasi</router-link> -->
      </div>
    </div>
    <app-slider :list="list">
      <template #default="{ item, medium }">
        <AppCard
          :link="item.link"
          :title="item.title"
          :subtitle="item.subtitle"
          :photo="item.photo"
          :medium="medium"
          :id="item.id"
          :value="item.value"
        />
      </template>
    </app-slider>
  </section>
</template>
<script>
import AppSlider from "../../shared-components/AppSlider";
import AppCard from "../../shared-components/AppCard";

export default {
  name: "AllTests",
  components: { AppCard, AppSlider },
  data() {
    return {
      list: [
        {
          title: "Blok testlar",
          subtitle:
            "O’z mutaxasisligingizga doir bo’lgan fanlar va majburiy fanlar testlarini yeching",
          photo: "/images/post8.png",
          value: "2",
        },
        {
          title: "O’quvchilar uchun test",
          subtitle:
            "5-11-sinf darsliklaridan tuzilgan testlarni berilgan vaqt ichida tez va oson yeching!",
          photo: "/images/post9.png",
          value: "2",
          link: "choose-subject-school",
        },
        {
          title: "IQ testlar",
          subtitle:
            "Aql,idrok koeffitsiyentini aniqlab,ma’lumotlar bilan ishlash qobiliyati va samarali yo’llarni qo’llash uchun ushbu testlarni yeching!",
          photo: "/images/post10.png",
          value: "2",
          link: "choose-IQ-test",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    // this.getTopCourses();
  },
};
</script>

<style scoped></style>
