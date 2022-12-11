<template>
  <div class="container">
    <section class="section choose-test py-40">
      <div class="section__top mb-30">
        <div class="section__top-left">
          <app-text
            :size="isMobileSmall ? 22 : isMobile ? 26 : 30"
            :line-height="isMobileSmall ? 26 : isMobile ? 30 : 36"
            weight="700"
            class="mb-10 color-text"
          >
            Abiturientlar va o'quvchilar uchun test topshirish tizimi
          </app-text>
          <app-text
            :size="isMobileSmall ? 12 : 14"
            :line-height="isMobileSmall ? 16 : 26"
            weight="500"
          >
            DTM talablari asosida tuzilgan 100 000 ta test savollaridan
            foydalangan holda test topshirish imkoni
          </app-text>
        </div>
      </div>
      <BlockWrap
        :count="isMobileSmall ? 1 : isMobile ? 2 : 3"
        :offset-y="isMobileSmall ? 15 : 20"
        :offset-x="isMobileSmall ? 15 : 20"
      >
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/block-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                IQ TESTLAR
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Bizning IQ testimizga xush kelibsiz. IQ test 10 savoldan iborat.
              test o'tib so'ng, statistik ma'lumotlarga asoslangan, aholiga
              nisbatan IQ natija olasiz.
            </AppText>
          </div>
          <AppButton
            @click="startIQTest"
            class="mla"
            theme="secondary"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/online-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                BLOK TESTLAR
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Siz ushbu bo'limda qabul test tizimi talablari asosida onlayn
              imtihon topshirasiz. Test varianti DTM talablari asosida
              shakllantirilgan. Savollar 100 000 savol ichidan tanlab beriladi.
              Testni boshlash uchun boshlash tugmachasini bosing
            </AppText>
          </div>
          <AppButton
            @click="chooseTestModal = true"
            class="mla"
            theme="secondary"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                MAKTAB O’QUVCHILARI UCHUN
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>
          <AppButton
            @click="startSchoolTest"
            class="mla"
            theme="secondary"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
        <div
          class="block__item bordered"
          :class="isMobileSmall ? 'pa-15' : 'pa-30'"
        >
          <div>
            <BlockWrap count="2" width-auto class="align-center mb-20">
              <div class="block__icon">
                <img src="/svg/school-exams.svg" alt="icon" />
              </div>
              <app-text size="18" line-height="24" weight="700">
                Olimpiada testlari
              </app-text>
            </BlockWrap>
            <AppText size="14" line-height="20" class="color-text mb-20">
              Ushbu bo'limda maktab o'quvchilari uchun tanlangan fan va undagi
              mavzular ro'yxatidan bir nechta mavzuni tanlab olish va ular
              asosida ko'rsatilgan sondagi testlarni yechish imkoniga ega
              bo'lasiz.
            </AppText>
          </div>
          <AppButton
            @click="startSchoolTest"
            class="mla"
            theme="secondary"
            sides="20"
            :font-size="isMobileSmall ? 14 : 16"
            :height="isMobileSmall ? 40 : 50"
          >
            Testni boshlash
          </AppButton>
        </div>
      </BlockWrap>
      <AppModal
        v-if="chooseTestModal"
        v-model="chooseTestModal"
        class="modal-sm"
        @close="closeModal"
      >
        <div class="modal__wrap" :class="isMobileSmall ? 'pa-20' : 'pa-30'">
          <div class="modal__body">
            <div class="radius mb-20">
              <base-select
                placeholder="Yo'nalishni tanlang"
                :options-prop="specList"
                v-model="selectedDirection"
              />
            </div>
            <div class="greyBg pa-10 radius mb-20">
              <AppText size="14" line-height="24" weight="700">
                Majburiy fanlar:
              </AppText>
            </div>
            <BlockWrap
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              class="align-center mb-10"
              v-for="(item, index) in directionMandatorySubjects"
              :key="index + 'mandatory'"
            >
              <AppText size="14" line-height="24" weight="700">
                {{ subjectLabels[index] }}
              </AppText>
            </BlockWrap>
            <BlockWrap
              v-if="directionMandatorySubjects.length <= 0"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              class="align-center mb-10"
            >
              <AppText size="14" line-height="24" weight="700">
                Birinchi fan
              </AppText>
              <BaseSelect placeholder="Matematika" disabled />
            </BlockWrap>
            <BlockWrap
              v-if="directionMandatorySubjects.length <= 0"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              class="align-center mb-10"
            >
              <AppText size="14" line-height="24" weight="700"
                >Ikkinchi fan
              </AppText>
              <BaseSelect placeholder="Ona tili" disabled />
            </BlockWrap>
            <BlockWrap
              v-if="directionMandatorySubjects.length <= 0"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              class="align-center mb-10"
            >
              <AppText size="14" line-height="24" weight="700">
                Uchinchi fan
              </AppText>
              <BaseSelect placeholder="O'zbekiston tarixi" disabled />
            </BlockWrap>
            <div class="greyBg pa-10 radius mb-20 mt-20">
              <AppText size="14" line-height="24" weight="700">
                Asosiy fanlar
              </AppText>
            </div>
            <BlockWrap
              class="align-center mb-10"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              v-for="(item, index) in directionMainSubjects"
              :key="index"
            >
              <AppText size="14" line-height="24" weight="700">
                {{ subjectLabels[index] }}
              </AppText>
            </BlockWrap>
            <BlockWrap
              class="align-center mb-10"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              v-if="directionMainSubjects.length <= 0"
            >
              <AppText size="14" line-height="24" weight="700">
                Birinchi fan
              </AppText>
            </BlockWrap>
            <BlockWrap
              class="align-center mb-10"
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              v-if="directionMainSubjects.length <= 0"
            >
              <AppText size="14" line-height="24" weight="700">
                Ikkinchi fan
              </AppText>
            </BlockWrap>

            <BlockWrap
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              offset-x="20"
              width-auto
            >
              <AppText size="14" line-height="24" weight="700">
                Umumiy vaqti:
              </AppText>
              <AppText
                size="16"
                line-height="24"
                weight="700"
                class="color-secondary"
              >
                {{ currencyFormat(examsOverAllTime) }} min
              </AppText>
            </BlockWrap>

            <BlockWrap
              :count="isMobileSmall ? 1 : 2"
              offset-y="10"
              offset-x="20"
              width-auto
              class="mb-20"
            >
              <AppText size="14" line-height="24" weight="700">
                Maksimum ball:
              </AppText>

              <AppText
                size="16"
                line-height="24"
                weight="700"
                class="color-main"
              >
                {{ currencyFormat(examsOverAllBall) }} ball
              </AppText>
            </BlockWrap>

            <AppButton
              theme="secondary"
              sides="20"
              :font-size="isMobileSmall ? 14 : 16"
              :height="isMobileSmall ? 40 : 50"
              style="width: 100%"
              :disabled="startTestButtonState"
            >
              Testni boshlash
            </AppButton>
          </div>
        </div>
      </AppModal>
    </section>
  </div>
</template>

<script>
import BlockWrap from "../../../components/shared-components/BlockWrap";
import AppButton from "../../../components/shared-components/AppButton";
import AppModal from "../../../components/shared-components/AppModal";
import BaseSelect from "../../../components/shared-components/BaseSelect";

import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "chooseTest",
  components: { AppModal, AppButton, BlockWrap, BaseSelect },
  data() {
    return {
      chooseTestModal: false,
      selectedDirection: null,
      directionMandatorySubjects: [],
      directionMainSubjects: [],
      subjectLabels: ["Birinchi fan", "Ikkinchi fan", "Uchinchi fan"],
      examsOverAllTime: 0,
      examsOverAllBall: 0,
      subjectsListForStartingTest: [],
      selectedSubjectsForOnlineTest: [],
      firstSubjectId: null,
      startTestButtonState: true,
    };
  },
  computed: {
    ...mapGetters(["specList"]),
  },
  methods: {
    ...mapActions(["getSpecList"]),
    ...mapMutations(["setTestType"]),
    startIQTest() {
      this.clearTestPropertiesFromLocalStorage();
      this.$router.push({ path: "/choose-IQ-test" });
    },
    startSchoolTest() {
      this.clearTestPropertiesFromLocalStorage();
      this.$router.push({ path: "/choose-subject-school" });
    },
    closeModal() {
      this.chooseTestModal = false;
    },
    //

    // directionChange() {
    //   if (!this.selectedDirection) {
    //     this.startTestButtonState = true;
    //     this.directionMainSubjects = [];
    //     this.directionMandatorySubjects = [];
    //     this.examsOverAllTime = 0;
    //     this.examsOverAllBall = 0;
    //     return;
    //   }
    //   this.getSubjectsByDirectionId(this.selectedDirection);
    // },
  },
  created() {},
};
</script>

<style scoped></style>
