export default {
data() {
      return {
        marvelService: null,
        entity: null,
        isBusy:false
      };
    },
  
    methods: {
      async getItem() {
        this.isBusy = true;
        let res = await this.marvelService.getById(this.id);
        this.isBusy = false;
        if (res.statusText == "OK") {
          this.entity = res.data.data.results[0];
        }
      },
    },
    async mounted() {
      await this.getItem();
    }
}