<template>
  <div class="container">
    <section class="py-40">
      <div class="section__top" :class="isMobile ? 'mb-10' : 'mb-30'">
        <app-text
          :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
          :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
          weight="700"
          class="mb-10"
        >
          IQ TESTLAR
        </app-text>
      </div>

      <div class="shadowed bordered radius pa-30 w-100">
        <div
          class="test__details mb-30"
          :class="isMobileSmall ? 'justify-content-center' : ''"
        >
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Savollar soni: </AppText>
            <AppText size="16" weight="700">20</AppText>
          </BlockWrap>
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Umumiy vaqt: </AppText>
            <AppText size="16" weight="700"> 30min </AppText>
          </BlockWrap>
        </div>
        <AppButton
          @click="getQuestionBySelectedParameters"
          theme="secondary"
          sides="20"
          :style="isMobileSmall ? 'display:block' : ''"
          :class="isMobileSmall ? 'mx-auto' : ''"
        >
          <img src="/icons/play.svg" alt="" style="margin-right: 10px" />
          Testni boshlash
        </AppButton>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BlockWrap from "../../../components/shared-components/BlockWrap";
import AppButton from "../../../components/shared-components/AppButton";
export default {
  name: "choose-test-iq",
  components: { AppButton, BlockWrap },
  data() {
    return {
      subjects: [
        {
          name: "Maths",
          photo: "/icons/sciences.svg",
        },
      ],
      selectedSubject: {
        selected: false,
        subject: {
          name: null,
        },
      },
      subjectSectionList: [
        {
          id: null,
          name: null,
        },
      ],
      selectedSubjectSections: [],
      questionLevelList: [],
      questionSelectedLevel: 1,
      questionTotalTime: 0,
      questionsCount: 5,
      questionsCountSelect: [
        {
          id: 5,
          name: 5,
        },
        {
          id: 10,
          name: 10,
        },
        {
          id: 15,
          name: 15,
        },
        {
          id: 20,
          name: 20,
        },
        {
          id: 25,
          name: 25,
        },
        {
          id: 30,
          name: 30,
        },
      ],
      questionTime: 0,
    };
  },
  methods: {
    ...mapMutations(["setTestType"]),
    getQuestionBySelectedParameters() {
      this.$router.push("test");
    },
  },
};
</script>

<style lang="scss" scoped>
.test__details {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  &-item {
    margin-right: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    .test__details {
      &-item {
        margin-right: 0;
      }
    }
  }
}
</style>
