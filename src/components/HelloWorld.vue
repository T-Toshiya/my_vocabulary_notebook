<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>メニュー</h2>
    <ul>
      <li>
        <a
          href="/#/register"
        >
          単語登録
        </a>
      </li>
      <li>
        <a
          href="/#/list"
        >
          単語一覧
        </a>
      </li>
      <li>
        <a
          href="/#/quiz"
        >
          単語学習
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '単語学習アプリ'
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
