<template>
  <div class="container">
    <section class="py-40">
      <div class="section__top" :class="isMobile ? 'mb-10' : 'mb-30'">
        <app-text
          :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
          :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
          weight="700"
          class="mb-10 color-secondary"
        >
          Test olinadigan fanni tanlang
        </app-text>
      </div>
      <BlockWrap
        :count="
          isMobileSmall ? 1 : isMobileMedium ? 2 : isDesktopMedium ? 3 : 4
        "
        class="mb-20"
      >
        <AppSmallCard
          v-for="(item, idx) in subjects"
          :key="idx"
          :title="item.name"
          :photo="item.photo"
          style="cursor: pointer"
          :class="0 === item.id ? 'active' : ''"
          @click="selectSubject(item)"
        />
      </BlockWrap>
      <div class="shadowed bordered radius pa-30 w-100">
        <div class="test__details mb-30">
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Sinfni tanlang </AppText>
            <BaseSelect :options-prop="classes" v-model="selectedClass">
            </BaseSelect>
          </BlockWrap>
          <BlockWrap
            width-auto
            class="align-center test__details-item"
            :count="isMobileSmall ? 2 : 1"
            offset-x="15"
            offset-y="15"
          >
            <AppText size="16" weight="700"> Umumiy vaqt </AppText>
            <BaseInput v-model="questionTotalTime" hide-details="" disabled>
            </BaseInput>
          </BlockWrap>
        </div>
        <AppButton
          theme="secondary"
          sides="20"
          @click="getQuestionBySelectedParameters"
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
import AppSmallCard from "../../../components/shared-components/AppSmallCard";
import AppButton from "../../../components/shared-components/AppButton";
import BaseSelect from "../../../components/shared-components/BaseSelect";
import BaseInput from "../../../components/shared-components/BaseInput";

export default {
  name: "choose-test-scool",
  components: { BlockWrap, AppSmallCard, AppButton, BaseSelect, BaseInput },
  data() {
    return {
      subjects: [
        {
          id: 0,
          name: "Matematika",
          photo: "/icons/sciences.svg",
        },
        {
          name: "Fizika",
          photo: "/icons/sciences.svg",
        },
        {
          name: "Informatika",
          photo: "/icons/sciences.svg",
        },
        {
          name: "Geografiya",
          photo: "/icons/sciences.svg",
        },
        {
          name: "Biologiya",
          photo: "/icons/sciences.svg",
        },
        {
          name: "Tarix",
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
      classes: [
        {
          id: 5,
          name: 5,
        },
        {
          id: 6,
          name: 6,
        },
        {
          id: 7,
          name: 7,
        },
        {
          id: 8,
          name: 8,
        },
        {
          id: 9,
          name: 9,
        },
        {
          id: 10,
          name: 10,
        },
        {
          id: 11,
          name: 11,
        },
      ],
      selectedClass: 5,
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
}
@media (max-width: 400px) {
  .test__details {
    &-item {
      margin-right: 0;
    }
  }
}
</style>
