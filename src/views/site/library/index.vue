<template>
  <div>
    <section class="py-40">
      <div class="container">
        <app-text
          :size="isMobile ? 24 : 30"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="mb-20 color-secondary"
        >
          Badiiy kitoblar
        </app-text>
        <BlockWrap
          :count="isMobileSmall ? 1 : isMobile ? 2 : 4"
          :offset-y="isMobileSmall ? 15 : 20"
          :offset-x="isMobileSmall ? 15 : 20"
          class="mb-30"
        >
          <div
            v-for="(item, i) in list"
            :key="i"
            class="d-flex justify-content-center"
          >
            <app-card-book
              :link="item.link"
              :title="item.title"
              :subtitle="item.subtitle"
              :photo="item.photo"
              :id="item.id"
              :value="item.value"
            />
          </div>
        </BlockWrap>
        <app-text
          :size="isMobile ? 24 : 30"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="mb-20 color-secondary"
        >
          Darsliklar va foydali materiallar
        </app-text>
        <BlockWrap
          :count="isMobileSmall ? 1 : isMobile ? 2 : 4"
          :offset-y="isMobileSmall ? 15 : 20"
          :offset-x="isMobileSmall ? 15 : 20"
          class="mb-30"
        >
          <div
            v-for="(item, i) in list"
            :key="i"
            class="d-flex justify-content-center"
          >
            <app-card-book
              :link="item.link"
              :title="item.title"
              :subtitle="item.subtitle"
              :photo="item.photo"
              :id="item.id"
              :value="item.value"
            />
          </div>
        </BlockWrap>
        <app-text
          :size="isMobile ? 24 : 30"
          :line-height="isMobile ? 28 : 36"
          weight="700"
          class="mb-20 color-secondary"
        >
          Audio kitoblar
        </app-text>
        <BlockWrap
          :count="isMobileSmall ? 1 : isMobile ? 2 : 4"
          :offset-y="isMobileSmall ? 15 : 20"
          :offset-x="isMobileSmall ? 15 : 20"
          class="mb-30"
        >
          <div
            v-for="(item, i) in list"
            :key="i"
            class="d-flex justify-content-center"
          >
            <app-card-audio
              :link="item.link"
              :title="item.title"
              :subtitle="item.subtitle"
              :photo="item.photo"
              :id="item.id"
              :value="item.value"
            />
          </div>
        </BlockWrap>
      </div>
    </section>
  </div>
</template>
<script>
import AppCardBook from "@/components/shared-components/AppCardBook.vue";
import BlockWrap from "../../../components/shared-components/BlockWrap";
import AppCardAudio from "@/components/shared-components/AppCardAudio.vue";
export default {
  name: "AppLibrary",
  components: { BlockWrap, AppCardBook, AppCardAudio },
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
};
</script>
<style scoped></style>
