<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img
       
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-toolbar-items>
        <v-btn to="/characters">Personagens</v-btn>
        <v-btn to="/comics" text>Quadrinhos</v-btn>
        <v-btn to="/series" text>Séries</v-btn>
        <v-btn to="/creators" text>Criadores</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-app-bar>
    <notifications />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {

  },
  mounted(){
    document.title = 'MARVEL'
  }
};
</script>
