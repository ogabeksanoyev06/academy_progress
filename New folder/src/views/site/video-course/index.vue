<template>
  <div class="container">
    <section class="py-40">
      <div>
        <div class="mb-30">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10 color-main"
            :class="isMobile ? 'text-center' : ''"
          >
            IELTS Kurslar
          </app-text>
          <block-wrap
            width-auto
            class="align-center justify-center mt-20"
            offset-x="20"
            offset-y="20"
            :count="4"
          >
            <div v-for="(item, i) in list" :key="i" style="max-width: 280px">
              <app-card
                :link="item.link"
                :title="item.title"
                :subtitle="item.subtitle"
                :photo="item.photo"
                :id="item.id"
                :value="item.value"
                :price="item.price"
              />
            </div>
          </block-wrap>
        </div>
        <div class="mb-30">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10 color-main"
            :class="isMobile ? 'text-center' : ''"
          >
            IELTS Kurslar
          </app-text>
          <block-wrap
            width-auto
            class="align-center justify-center mt-20"
            offset-x="20"
            offset-y="20"
            :count="4"
          >
            <div v-for="(item, i) in list" :key="i" style="max-width: 280px">
              <app-card
                :link="item.link"
                :title="item.title"
                :subtitle="item.subtitle"
                :photo="item.photo"
                :id="item.id"
                :value="item.value"
                :price="item.price"
              />
            </div>
          </block-wrap>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BlockWrap from "@/components/shared-components/BlockWrap.vue";
import AppCard from "@/components/shared-components/AppCard.vue";
export default {
  name: "videoCourse",
  components: { BlockWrap, AppCard },
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
          id: 1,
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
};
</script>
<style scoped></style>
