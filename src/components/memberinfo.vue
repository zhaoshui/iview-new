<template>
  <div class="memberinfo">
    <h1>{{ msg }}</h1>
    <mtable></mtable>
  </div>
</template>

<script>
import mtable from '../component/mtable.vue'
export default {
  name: 'memberinfo',
  data () {
    return {
      msg: '第二页内容'
    }
  },
  components: {mtable}
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
