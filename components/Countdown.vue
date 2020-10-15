<template>
  <div class="flex justify-evenly flex-row w-full">
    <div class="block">
      <p class="digit">
        {{ hours | two_digits }}
      </p>
      <p class="text">
        Hours
      </p>
    </div>
    <div class="block">
      <p class="digit">
        {{ minutes | two_digits }}
      </p>
      <p class="text">
        Minutes
      </p>
    </div>
    <div class="block">
      <p class="digit">
        {{ seconds | two_digits }}
      </p>
      <p class="text">
        Seconds
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: {
    date: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      target: Math.trunc(Date.parse(this.date) / 1000),
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    seconds () {
      return (this.target - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.target - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.target - this.now) / 60 / 60) % 24
    }
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.text {
  color: #1abc9c;
  font-size: 12px;
  font-family: 'Roboto Condensed', serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.digit {
  color: #ecf0f1;
  font-size: 48px;
  font-weight: 100;
  font-family: 'Roboto', serif;
  margin: 10px;
  text-align: center;
}
@media(min-width: 1024px){
  .text {
    font-size: 40px;
  }
  .digit {
    font-size: 150px;
  }
}
</style>
