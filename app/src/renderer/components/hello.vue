<template>
    <div>
        <div class="example">{{msg}}</div>
        <b-alert show>Default Alert</b-alert>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  例えばコンポーネントのドキュメントを書くことが出来ます
</custom1>