<template>
  <section class="section py-40">
    <div class="section__top mb-30">
      <app-text
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
      >
        Kutubxona
      </app-text>
      <div class="section__top-details">
        <!-- <router-link class="section__top-link" to="/">Barchasi</router-link> -->
      </div>
    </div>
    <app-slider :list="list">
      <template #default="{ item, medium }">
        <app-card-book
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
import AppCardBook from "@/components/shared-components/AppCardBook.vue";

export default {
  name: "AppBooks",
  components: { AppSlider, AppCardBook },
  data() {
    return {
      list: [
        {
          title: "Blok testlar",
          subtitle:
            "O’z mutaxasisligingizga doir bo’lgan fanlar va majburiy fanlar testlarini yeching",
          photo: "/images/book.png",
          value: "2",
        },
        {
          title: "O’quvchilar uchun test",
          subtitle:
            "5-11-sinf darsliklaridan tuzilgan testlarni berilgan vaqt ichida tez va oson yeching!",
          photo: "/images/book.png",
          value: "2",
          link: "choose-subject-school",
        },
        {
          title: "IQ testlar",
          subtitle:
            "Aql,idrok koeffitsiyentini aniqlab,ma’lumotlar bilan ishlash qobiliyati va samarali yo’llarni qo’llash uchun ushbu testlarni yeching!",
          photo: "/images/book.png",
          value: "2",
          link: "choose-IQ-test",
        },
        {
          title: "Kutubxona",
          subtitle:
            "Siz uchun qiziqarli bo’lgan yo’nalishga oid kitoblar va audio hikoyalarni bizdan topishingiz mumkin!",
          photo: "/images/book.png",
          value: "2",
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
