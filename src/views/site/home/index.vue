<template>
  <div class="home-page">
    <HeroBanner />
    <div class="container">
      <CtaBanner
        title="Qulayliklardan foydalaning va vaqtingizni tejang."
        content="Har qanday narsani - Har qanday vaqtda - Har qanday joyda o'rganing"
        photo="/images/cta-banner.png"
        buttonText="Hoziroq boshlang"
      />
      <AllTests />
      <CtaBanner
        title="Har qanday narsani - Har qanday vaqtda - Har qanday joyda o'rganing"
        content="Web-saytlar va dasturlarni yaratishning har bir yo'nalishi o'ziga xos ko'nikmalar to'plamini talab qiladi. Udemy sizni zamonaviy zamonaviy, tezkor va to'liq stack veb-ishlab chiqarish amaliyoti va ko'nikmalarini tezlashtirishga yo'naltirish uchun ko'plab kurslarni taklif etadi."
        photo="/images/cta-banner.png"
        buttonText="Hoziroq boshlang"
      />
      <IelstCourses />
      <CtaBanner
        title="Har qanday narsani - Har qanday vaqtda - Har qanday joyda o'rganing"
        content="Web-saytlar va dasturlarni yaratishning har bir yo'nalishi o'ziga xos ko'nikmalar to'plamini talab qiladi. Udemy sizni zamonaviy zamonaviy, tezkor va to'liq stack veb-ishlab chiqarish amaliyoti va ko'nikmalarini tezlashtirishga yo'naltirish uchun ko'plab kurslarni taklif etadi."
        photo="/images/cta-banner.png"
        buttonText="Hoziroq boshlang"
      />
      <Books />
      <CtaBanner
        title="Har qanday narsani - Har qanday vaqtda - Har qanday joyda o'rganing"
        content="Web-saytlar va dasturlarni yaratishning har bir yo'nalishi o'ziga xos ko'nikmalar to'plamini talab qiladi. Udemy sizni zamonaviy zamonaviy, tezkor va to'liq stack veb-ishlab chiqarish amaliyoti va ko'nikmalarini tezlashtirishga yo'naltirish uchun ko'plab kurslarni taklif etadi."
        photo="/images/cta-banner.png"
        buttonText="Hoziroq boshlang"
      />
      <InternationTest />
    </div>
  </div>
</template>

<script>
import IelstCourses from "@/components/pages/home/IelstCourses.vue";
import HeroBanner from "../../../components/pages/home/HeroBanner";
import CtaBanner from "@/components/pages/home/CtaBanner.vue";
import AllTests from "@/components/pages/home/AllTests.vue";
import Books from "@/components/pages/home/Books.vue";
import InternationTest from "@/components/pages/home/InternationTest.vue";

export default {
  name: "app-home",
  components: {
    HeroBanner,
    IelstCourses,
    CtaBanner,
    AllTests,
    Books,
    InternationTest,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
