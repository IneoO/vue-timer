<template>
  <div class="align-center">
    <div>
      <label class="label" for="countdown">Countdown:</label>
      <input type="number" id="countdown" class="input" v-model="countdown"/>
      <button id="buttonStart" class="btn" @click="startCountdown">Start</button>
      <button id="buttonPause" class="btn" @click="pauseCountdown">Pause</button>
    </div>
    <h3 :class="getClass">{{announce}}</h3>
    <h1>{{getTimer}}</h1>
    <SpeedSelector :speedValues="speedValues" v-model="speedSelected"/>
  </div>
</template>

<script>
import SpeedSelector from './SpeedSelector.vue';

export default {
  name: 'timer',
  data() {
    return {
      started: false,
      countdown: null,
      startTimer: null,
      timeElapsed: null,
      timer: null,
      time: null,
      speedValues: [
        {
          text: 'x1',
          value: 1,
        },
        {
          text: 'x1.5',
          value: 1.5,
        },
        {
          text: 'x2',
          value: 2,
        },
        {
          text: 'x4',
          value: 4,
        },
        {
          text: 'x8',
          value: 8,
        },
      ],
      speedSelected: 1,
      pause: false,
      interval: null,
    };
  },
  methods: {
    startCountdown() {
      if (this.started) {
        clearInterval(this.interval);
      }
      if (!this.pause) {
        this.timer = this.countdown * 60000;
        this.time = this.timer;
        this.timeElapsed = 0;
      }
      this.startTimer = new Date();
      this.started = true;
      this.interval = setInterval(() => {
        const date = new Date();
        this.timeElapsed += (date - this.startTimer) * this.speedSelected;
        this.time = this.timer - this.timeElapsed;
        this.startTimer = date;
        if (this.time <= 0) {
          clearInterval(this.interval);
          this.time = 0;
        }
      }, 100);
    },
    pauseCountdown() {
      this.pause = true;
      clearInterval(this.interval);
      this.timer -= this.timeElapsed;
      this.timeElapsed = 0;
    },
  },
  computed: {
    getTimer() {
      if (this.timer === null) {
        return 'MM:SS';
      }
      let minutes = Math.floor(this.time / 60000);
      let seconds = Math.floor((this.time - (minutes * 60000)) / 1000);

      minutes = (minutes < 10) ? `0${minutes}` : minutes;
      seconds = (seconds < 10) ? `0${seconds}` : seconds;

      return `${minutes}:${seconds}`;
    },
    announce() {
      if (this.started && this.time === 0) {
        return 'Time’s up!';
      }
      if (this.started && this.time && this.time * 2 <= this.timer) {
        return 'More than halfway there!';
      }
      return '';
    },
    getClass() {
      return {
        announce: true,
        red: this.time < 20000,
        blink: this.time < 10000,
      };
    },
  },
  components: {
    SpeedSelector,
  },
};
</script>

<style scoped>
.align-center {
  text-align: center;
}

.red {
  color: #FB454F;
}

.blink {
  animation: blinker 1s linear infinite;
}

.btn {
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
  color: #FB454F;
  background-color: #FFFFFF;
  border-style: solid;
  border-radius: 2px;
  border-width: 2px;
  border-color: #FA000D;
  padding: 10px 15px;
}

.btn:hover {
  color: white;
  background-color: #FB454F;
  border-style: solid;
}

.btn:focus {
  outline: none;
  border-color: #FB454F;
}

.input {
  font-weight: bold;
  outline: none;
  padding: 10px 15px;
  background-color: #FFFFFF;
  color: #606266;
  border-style: solid;
  border-radius: 2px;
  border-width: 2px;
  border-color: #FA000D;
}

.input:focus {
  outline: none;
  border-color: #FB454F;
}

.label {
  font-weight: bold;
}

h1 {
  text-align: center;
  font-size: 5em;
}

.announce {
  font-weight: bold;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>
