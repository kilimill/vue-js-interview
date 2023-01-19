<template>
  <v-list-item v-if="user.title">
    <v-list-item-avatar @click="setShowAddress">
      <v-img :src="user.avatar"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-html="user.title"></v-list-item-title>
      <v-list-item-subtitle v-html="user.subtitle"></v-list-item-subtitle>
      <v-list-item-subtitle
        :class="{ hide: !isShowAddres }"
        v-html="user.address"
      ></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "User",

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isShowAddres: false,
  }),

  methods: {
    setShowAddress() {
      this.isShowAddres = !this.isShowAddres;
    },
  },
};
</script>

<style scoped>
.hide {
  opacity: 0;
  transition: 0.3s;
}
</style>
