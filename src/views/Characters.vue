<template>
  <div>
    <v-progress-linear v-if="isBusy" indeterminate></v-progress-linear>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        xs="12"
        md="4"
        v-for="(item, index) in items"
        :key="index"
      >
        <marvel-card
          :id="item.id"
          :title="item.name"
          :thumbnail="`${item.thumbnail.path}.${item.thumbnail.extension}`"
          :is-favorite="isFavorite(item.id)"
          @click-favorite="setFavorite"
          @click="clickCard"
          :personagem="item"
        ></marvel-card>
      </v-col>
    </v-row>
    <v-progress-linear v-if="isBusy" indeterminate></v-progress-linear>
  </div>
</template>

<script>
import marvelListMixin from "../mixins/marvelListMixin";
import marvelFavoriteMixin from "../mixins/marvelFavoriteMixin";
import MarvelService from "../services/marvelService";
import marvelCard from "../components/marvelCard.vue";

export default {
  name: "Personagens",
  mixins: [marvelListMixin, marvelFavoriteMixin],
  components: { marvelCard },
  data() {
    return {
      favoriteList: [],
      entityName: "characters",
      marvelService: new MarvelService("characters"),
    };
  },
  methods: {
    clickCard(id) {
      this.$router.push(`detail/characters/${id}`);
    },
  },

  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    await this.getFavoriteList(this.entityName);
    await this.getItems();
  },
};
</script>
