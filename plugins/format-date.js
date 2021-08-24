import Vue from "vue";

Vue.filter("formatDate", (dateStr) =>
  Intl.DateTimeFormat("us-EN").format(new Date(dateStr))
);