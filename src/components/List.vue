<template>
  <div class="hello">
    <h2>単語一覧</h2>
    <ul v-bind:key="word" v-for="(word, key) in registeredWords">
      <li>単語：{{ word.word }} 意味：{{ word.meaning }}</li>
      <button v-on:click="deleteWord(key)">×</button>
    </ul>
    <back></back>
  </div>
</template>

<script>
import Vue from 'vue'
import Back from '@/components/Back'
import firebase from 'firebase'

export default {
  name: 'Register',
  created: function () {
    this.database = firebase.database()
    this.words = this.database.ref('/words')

    var _this = this
    this.words.on('value', function (snapshot) {
      _this.registered_words = snapshot.val()
    })
  },
  computed: {
    registeredWords: function () {
      return this.registered_words
    }
  },
  methods: {
    deleteWord: function (id) {
      this.words.child(id).remove()
    }
  },
  data () {
    return {
      registered_words: []
    }
  }
}
Vue.component('back', Back)
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
