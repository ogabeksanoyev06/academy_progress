<template>
  <div class="input__holder">
    <div class="input__block">
      <div class="input__block-wrap">
        <select
          :value="value"
          :disabled="disabled"
          @input="inputValue"
          @change="changeValue"
          class="input__block-input"
        >
          <option value="" hidden>
            <app-text size="14" line-height="20" class="color-text">
              {{ placeholder }}
            </app-text>
          </option>
          <option
            :value="item.id"
            v-for="(item, index) in selectOptions"
            :key="index"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/styles/components/base-input.scss";

export default {
  name: "BaseSelect",
  components: {},
  props: {
    value: {
      default: "",
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    optionsProp: {
      type: Array,
      default: () => [
        {
          name: "Something",
          id: 0,
        },
      ],
    },
  },
  data() {
    return {
      selectOptions: [],
    };
  },
  computed: {},
  methods: {
    inputValue(event) {
      this.$emit("input", event.target.value);
    },
    changeValue(event) {
      this.$emit("change", event.target.value);
    },
  },
  mounted() {
    this.selectOptions = this.optionsProp;
  },
  watch: {
    optionsProp() {
      this.selectOptions = [];
      this.selectOptions = this.optionsProp;
    },
  },
};
</script>
