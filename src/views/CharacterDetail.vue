<template>
  <div>
    <marvel-detail
    v-if="entity"
      :title="entity.name"
      :description="entity.description"
      :thumbnail="`${entity.thumbnail.path}.${entity.thumbnail.extension}`"
      :stories="entity.stories.items"
      :series="entity.series.items"
      :urls="entity.urls">
    ></marvel-detail>
  </div>
</template>

<script>
import MarvelService from "../services/marvelService";
import marvelDetail from "../components/marvelDetail.vue";
import marvelDetailMixin from '../mixins/marvelDetailMixin'
export default {
  props: ["id"],
  components: { marvelDetail },
  mixins: [marvelDetailMixin],
  data() {
    return {
      marvelService: new MarvelService("characters"),
    };
  },

};
</script>

<style>
</style>