<template>
  <v-select
    :items="content"
    clearable
    :label="'Filter by ' + name"
    @change="selectFilter"
  ></v-select>
</template>

<script>
export default {
  name: "UserFilters",

  props: {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },

  methods: {
    selectFilter(vl) {
      this.$store.dispatch("users/setFilter", { name: this.name, data: vl });
    },
  },
};
</script>
