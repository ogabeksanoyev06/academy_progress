<template>
  <!--  Add active class to app small card in order to show green borders in card-->
  <div class="app-small-card" @click="clickMe">
    <AppText size="16" line-height="26" weight="700" class="color-main">
      {{ title }}
    </AppText>
    <AppText size="12" line-height="20" weight="500">
      20 dona test • 2000 marta ishlangan
    </AppText>
  </div>
</template>

<script>
export default {
  name: "AppSmallCard",
  props: {
    title: String,
    photo: String,
  },
  methods: {
    clickMe(event) {
      this.$emit("click", event.target.value);
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/abstracts/variables";

.app-small-card {
  position: relative;
  background-color: #e7f3ffc1;
  box-shadow: 0px 0px 5px rgb(12, 128, 237);
  border-radius: 8px;
  padding: 15px 17px 15px 24px;
  transition: all 0.25s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    height: calc(100% - 30px);
    top: 50%;
    left: 12px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 3px;
    background: #03ca82;
    border-radius: 3px;
  }
  &:hover {
    box-shadow: 0px 0px 10px rgb(12, 128, 237);
  }
  &.active {
    box-shadow: 0px 0px 10px rgb(12, 128, 237);
  }
  &__icon {
    max-width: 26px;
    max-height: 26px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.app-small-card:hover {
  border-color: $color-main;
}
</style>
