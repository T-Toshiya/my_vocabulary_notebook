<template>
  <div class="hello">
    <h2>単語登録</h2>
    単語：<input type="text" v-model="word"><br>
    意味：<input type="text" v-model="meaning"><br>
    <button type="submit" v-on:click="register()">Register</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  created: function () {
    this.database = firebase.database()
    this.words = this.database.ref('/words')
  },
  methods: {
    register: function () {
      this.words.push({
        word: this.word,
        meaning: this.meaning
      })
      this.word = ''
      this.meaning = ''
    }
  },
  data () {
    return {
      word: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
