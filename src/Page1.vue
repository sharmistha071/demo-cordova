<template id="home">
  <v-ons-page>
    <custom-toolbar :back-label="'Home'">Todos</custom-toolbar>
    <v-ons-list>
      <v-ons-list-item>Item A</v-ons-list-item>
      <v-ons-list-item>Item B</v-ons-list-item>
      <v-ons-list-item>Item C</v-ons-list-item>
      <v-ons-list-item>Item D</v-ons-list-item>
      <v-ons-list-item>Item A</v-ons-list-item>
      <v-ons-list-item>Item B</v-ons-list-item>
      <v-ons-list-item>Item C</v-ons-list-item>
      <v-ons-list-item>Item D</v-ons-list-item>
      <v-ons-list-item>Item A</v-ons-list-item>
      <v-ons-list-item>Item B</v-ons-list-item>
      <v-ons-list-item>Item C</v-ons-list-item>
      <v-ons-list-item>Item D</v-ons-list-item>
      <v-ons-list-item>Item A</v-ons-list-item>
      <v-ons-list-item>Item B</v-ons-list-item>
      <v-ons-list-item>Item C</v-ons-list-item>
      <v-ons-list-item>Item Z</v-ons-list-item>
    </v-ons-list>
    <v-ons-fab position='bottom right' @click="push">
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
const home = {
  template: '#home',
  props: ['toggleMenu'],
  components: { home }
}
import customToolbar from './CustomToolbar';
import page2 from './Page2';
export default {
  data(){
    return {
      title: "Todo List",
      currentPage: 'home',
      pages: ['home', 'customToolbar'],
      openSide: false
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(page2);
    }
  },
  props: ['pageStack'],
  components: {
    customToolbar,
    home
  }
}
</script>
