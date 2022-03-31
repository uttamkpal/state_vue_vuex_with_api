<template>
  <h3>Counter Value</h3>
  <p>{{ $store.state.counter }}</p>
  <!-- <button @click="$store.commit('increment')">+</button>
  <button @click="$store.commit('decrece')">-</button> -->
  <button @click="$store.dispatch('increment')">+</button>
  <button @click="$store.dispatch('decrece')">-</button>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "countComponent",

  // computed: mapState({

  //   'count',
  //   // count: state => state.count,
  //   // countAlias: 'count',
  // })
};
</script>

<style></style>
