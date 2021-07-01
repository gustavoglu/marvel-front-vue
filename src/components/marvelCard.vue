<template>
  <v-hover v-slot="{ hover }">
    <v-card color="secondary" class="ma-2" :elevation="hover ? 12 : 2">
      <v-layout>
        <v-card-title >
          <a @click="$emit('click', id)" style="color: white"> 
            {{ title }}
            </a>
      </v-card-title
        >
        <v-spacer />
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :color="isFavorite == true ? 'primary' : 'white'"
                dark
                icon
                v-bind="attrs"
                v-on="on"
                @click="$emit('click-favorite', id)"
              >
                <v-icon>mdi-heart</v-icon></v-btn
              >
            </template>
            <span>Favoritar</span>
          </v-tooltip>
        </v-card-actions>
      </v-layout>
      <v-img
        height="250"
        @click="$emit('click', id)"
        :src="thumbnail"
      ></v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["id","title","thumbnail", "isFavorite"],
};
</script>

<style>
</style>