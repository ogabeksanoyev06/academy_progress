<template>
  <section class="section py-40">
    <div class="section__top mb-30">
      <app-text
        :size="isMobile ? 24 : 30"
        :line-height="isMobile ? 28 : 36"
        weight="700"
      >
        IELTS kurslar
      </app-text>

      <div class="section__top-details">
        <router-link class="section__top-link" to="/">Barchasi</router-link>
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
          :price="item.price"
        />
      </template>
    </app-slider>
  </section>
</template>

<script>
import AppSlider from "../../shared-components/AppSlider";
import AppCard from "../../shared-components/AppCard";

export default {
  name: "IeltsCourse",
  components: { AppCard, AppSlider },
  data() {
    return {
      list: [
        {
          id: 0,
          title: "Starter darslar",
          subtitle:
            "Qiziqarli ertaklar yordamida ingliz tili bilimingizni oshiring.Biz bilan barchasi tez va oson!",
          photo: "/images/post.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Beginner darslar",
          subtitle:
            "Qiziqarli ertaklar yordamida ingliz tili bilimingizni oshiring.Biz bilan barchasi tez va oson!",
          photo: "/images/post1.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Elementary darslar",
          subtitle:
            "Qiziqarli ertaklar yordamida ingliz tili bilimingizni oshiring.Biz bilan barchasi tez va oson!",
          photo: "/images/post2.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Pre Intermidate darslar",
          subtitle:
            "Qiziqarli ertaklar yordamida ingliz tili bilimingizni oshiring.Biz bilan barchasi tez va oson!",
          photo: "/images/post3.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Intermediate darslar",
          subtitle: "Mnemonika yordamida so’zlarni tez va oson yodlang.",
          photo: "/images/post4.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Upper-intermediate darslar",
          subtitle: "Mnemonika yordamida so’zlarni tez va oson yodlang.",
          photo: "/images/post5.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "Pre IELTS darslar",
          subtitle: "Mnemonika yordamida so’zlarni tez va oson yodlang.",
          photo: "/images/post6.png",
          value: "2",
          price: "99 000 so'm",
        },
        {
          title: "IELTS darslar",
          subtitle: "Mnemonika yordamida so’zlarni tez va oson yodlang.",
          photo: "/images/post7.png",
          value: "2",
          price: "99 000 so'm",
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
