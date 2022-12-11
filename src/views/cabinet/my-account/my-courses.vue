<template>
  <div class="my-courses">
    <AppText size="14" line-height="26" weight="700" class="color-text mb-20">
      My courses
    </AppText>
  </div>
</template>

<script>
import "../../../assets/styles/pages/course.scss";

export default {
  name: "my-courses",
  components: {},
  data() {
    return {
      userBoughtCourses: {
        data: [
          {
            avgStar: null,
            boughtCount: null,
            description: null,
            durationHour: null,
            durationMinute: null,
            id: null,
            name: null,
            pictureLarge: null,
            pictureSmall: null,
            price: null,
            videoCount: null,
            visitCount: null,
          },
        ],
        total: 0,
      },
    };
  },
  methods: {
    getBoughtCourses() {},
  },
  mounted() {
    this.getBoughtCourses();
  },
};
</script>

<style lang="scss" scoped>
.my-courses {
  .course__item-photo {
    max-height: 144px;
    max-width: 225px;
  }
}
</style>
