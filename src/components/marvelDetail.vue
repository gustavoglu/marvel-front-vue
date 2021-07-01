<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="ma-2">
          <v-img dark :src="thumbnail"> </v-img>
        </v-card>
      </v-col>
      <v-col>
        <v-row align="center" justify="center" class="ma-5">
          <v-col class="text-center" cols="12">
            <div class="text-h3">{{ title }}</div>
            <div class="text-subtitle-1 mt-5">{{ description }}</div>
          </v-col>
        </v-row>

        <v-tabs v-model="tab">
          <v-tab key="stories" v-if="stories && stories.length > 0"
            >Histórias</v-tab
          >
          <v-tab key="series" v-if="series && series.length > 0">Séries</v-tab>
          <v-tab key="urls">Links</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item key="stories">
            <div v-if="stories && stories.length > 0">
              <v-list v-for="(item, index) in stories" :key="index">
                <v-list-item link>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-tab-item>
          <v-tab-item key="series">
            <div v-if="series && series.length > 0">
              <v-list v-for="(item, index) in series" :key="index">
                <v-list-item link>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div></v-tab-item
          >
          <v-tab-item key="urls" eager>
            <div v-if="urls && urls.length > 0">
              <v-list v-for="(url, index) in urls" :key="index">
                <v-list-item link two-line @click="openLink(url.url)">
                  <v-list-item-content>
                    <v-list-item-title>{{ url.type }}</v-list-item-title>
                    <v-list-item-subtitle>{{ url.url }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "thumbnail", "stories", "series", "urls"],
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
</style>