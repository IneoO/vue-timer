<template>
  <div>
    <a v-for="(speedValue, index) in speedValues"
      :key="speedValue.value"
      :class="getClass(index)"
      @click="selectSpeed(index)"
      class="button">{{speedValue.text}}</a>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    speedValues: {
      default: () => [],
      type: Array,
    },
    value: {
      type: Number,
    },
  },
  data() {
    return {
      indexSelected: null,
    };
  },
  methods: {
    selectSpeed(index) {
      this.indexSelected = index;
      this.$emit('input', this.speedValues[index].value);
    },
    getClass(index) {
      return {
        btn: true,
        selected: this.indexSelected === index,
      };
    },
  },
  mounted() {
    if (this.speedValues.length) {
      for (let i = 0; i < this.speedValues.length; i += 1) {
        if (this.speedValues[i].value === this.value) {
          this.indexSelected = i;
          return;
        }
      }
    }
  },
};
</script>

<style scoped>
.btn {
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  color: #FB454F;
  background-color: #FFFFFF;
  border-style: solid;
  border-radius: 15px;
  border-width: 2px;
  border-color: #FA000D;
  padding: 10px 15px;
  text-align: center;
}

.btn:hover {
  color: white;
  background-color: #FB454F;
  border-style: solid;
}

.selected {
  color: white;
  background-color: #FB454F;
  border-style: solid;
}

</style>
