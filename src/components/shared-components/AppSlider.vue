<template>
  <div class="app-slider" :class="{ 'app-slider--medium': medium }">
    <div class="splide" ref="slider">
      <div class="splide__slider">
        <div class="splide__track">
          <div class="splide__list">
            <div v-for="(item, idx) in list" :key="idx" class="splide__slide">
              <slot :item="item" :medium="medium"></slot>
            </div>
          </div>
        </div>
        <div class="app-slider__btn">
          <button key="1" class="app-slider__button-previous" @click="previous">
            <img src="/icons/angle-right.svg" alt="" />
          </button>
          <button key="2" class="app-slider__button-next" @click="next">
            <img src="/icons/angle-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const SplideJS = () => import("@splidejs/splide");
import "@splidejs/splide/dist/css/splide-core.min.css";
import "../../assets/styles/components/app-slider.scss";

export default {
  name: "AppSlider",
  components: {},
  props: {
    list: {
      type: Array,
      required: true,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    slideCount: {
      type: [String, Number],
      default: 4,
    },
  },
  data() {
    return {
      cardsSlider: null,
      showPreviousArrow: false,
      showNextArrow: false,
    };
  },

  computed: {
    count() {
      if (this.isMobile) {
        return 1;
      }
      if (this.isDesktopSmall) {
        return this.medium ? 2 : 3;
      }
      return this.medium ? 3 : this.slideCount;
    },

    options() {
      return {
        rewind: true,
        drag: this.list.length > this.count,
        perPage: this.count,
        perMove: 1,
        gap: 15,
        arrows: false,
        pagination: false,
        breakpoints: {
          1240: {
            gap: 15,
          },
          1100: {
            perPage: 3,
            gap: 15,
          },
          900: {
            perPage: 2,
            gap: 15,
          },

          550: {
            perPage: 1,
          },
        },
      };
    },
  },
  methods: {
    checkArrows(idx) {
      this.showPreviousArrow = idx > 0;
      this.showNextArrow =
        (this.isMobile ? idx : idx + this.count - 1) < this.list.length - 1;
    },
    next() {
      if (this.cardsSlider) {
        this.cardsSlider.go("+1");
      }
    },
    previous() {
      if (this.cardsSlider) {
        this.cardsSlider.go("-1");
      }
    },
    async init() {
      const refSlider = this.$refs["slider"];
      const Splide = await SplideJS();
      const slider = new Splide.default(refSlider, this.options);
      slider.mount();
      this.checkArrows(0);
      slider.on("move", (newIndex) => {
        this.checkArrows(newIndex);
        this.$emit("select", { index: newIndex });
      });
      this.cardsSlider = slider;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    list() {
      this.init();
    },
  },
  beforeDestroy() {
    if (this.cardsSlider) {
      const cardsSlider = this.cardsSlider;
      setTimeout(() => {
        cardsSlider.destroy();
      }, 150);
    }
  },
};
</script>

<style lang="scss">
@media (max-width: 1350px) {
  .app-slider {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 991px) {
  .app-slider {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 776px) {
  .app-slider {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}
</style>
