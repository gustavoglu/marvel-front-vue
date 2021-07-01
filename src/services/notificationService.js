import Vue from "vue";
export default {
  error( message,title,isDuration) {
    Vue.prototype.$notify({
      title: title ? title : "Error",
      text: message,
      closeOnClick: true,
      duration: isDuration ? 3000 : 120000,
      positions: "left",
      type: "error",
    });
  },
  success( message,title, isDuration = true) {
    Vue.prototype.$notify({
      title: title ? title : "Success",
      text: message ? message : "",
      closeOnClick: true,
      duration: isDuration ? 3000 : 120000,
      positions: "left",
      type: "success",
    });
  },
};
