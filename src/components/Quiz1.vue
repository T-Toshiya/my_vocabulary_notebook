<template>
  <div class="hello">
    <h2>単語暗記</h2>
    <p>{{ displayWords[word_key].word }}</p>
    <button v-on:click="showMeaning">意味を表示</button>
    <p v-show="isShow">意味：{{ displayWords[word_key].meaning }}</p>
    <button v-show="isShow" v-on:click="next">次の単語</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Register',
  created: function () {
    this.database = firebase.database()
    this.words = this.database.ref('/words')
    var _this = this

    this.words.on('value', function (snapshot) {
      _this.registered_words = snapshot.val()

      Object.keys(_this.registered_words).forEach(function (key) {
        _this.display_words.push({
          word: _this.registered_words[key].word,
          meaning: _this.registered_words[key].meaning
        })
      })
    })
  },
  computed: {
    displayWords: function () {
      return this.display_words
    }
  },
  methods: {
    showMeaning: function () {
      this.isShow = true
    },
    next: function () {
      this.word_key++
      this.isShow = false
    }
  },
  data () {
    return {
      registered_words: [],
      display_words: [],
      word_key: 0,
      isShow: false
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
