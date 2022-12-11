<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <h1 class="hero-banner__title text-center mb-20">
              <span class="color-main">
                <vue-typer
                  :text="['PROGRESS']"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="100"
                  :pre-erase-delay="2000"
                  :erase-delay="252"
                  erase-style="clear"
                  :erase-on-complete="false"
                  caret-animation="smooth"
                ></vue-typer>
              </span>
              ACADEMY
            </h1>
            <app-text
              size="18"
              line-height="24"
              max-lines="2"
              weight="700"
              text-align="center"
              class="color-text mb-40 text-center"
            >
              Kasbiy maqsadlaringizga erishish uchun eng so'nggi ko'nikmalarni
              o'rganing.
            </app-text>
          </div>
          <div class="hero-banner__photo">
            <kinesis-element class="layer" :strength="20">
              <img src="/images/hero-banner.png" alt="" />
            </kinesis-element>
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { VueTyper } from "vue-typer";

export default {
  name: "HeroBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
    "vue-typer": VueTyper,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/abstracts/variables";
.vue-typer .custom.caret {
  display: none;
}
.vue-typer .custom.char.typed {
  color: $color-main;
}
.hero-banner {
  background-color: #f5f5f7;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &__ParticlesJs {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    overflow-y: hidden;
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 120px);
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 42px;
    line-height: 51px;
  }

  &__content {
    max-width: calc(50% - 20px);
  }

  &__photo {
    max-width: calc(50% - 20px);
    padding: 20px;

    img {
      max-width: 530px;
      width: 100%;
      object-fit: contain;
      margin-left: auto;
    }
  }

  &__cta {
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    padding: 5px 0;
  }
}

@media (max-width: 850px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    padding: 50px 30px;
    justify-content: unset;
  }

  .hero-banner__content {
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    order: 2;
  }

  .hero-banner__cta {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    .hero-banner__inner {
      padding: 30px 10px;
    }

    .hero-banner__photo {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 500px) {
  .hero-banner__inner {
    min-height: calc(100vh - 90px);
  }

  .hero-banner__photo {
    margin-bottom: 0;
  }
}
</style>
