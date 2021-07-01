

export default {
  getApiKeyParams: function() {

    return { ts: process.env.VUE_APP_MARVEL_TS, hash: process.env.VUE_APP_MARVEL_HASH, apikey: process.env.VUE_APP_MARVEL_PUBLICKEY };
  },
};
