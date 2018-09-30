<template>
  <div id="app">
    <Timer />
  </div>
</template>

<script>
import Timer from './components/Timer.vue';

export default {
  name: 'app',
  components: {
    Timer,
  },
};
</script>

<style>
#app {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
