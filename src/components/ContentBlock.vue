<template>
  <v-container>
    <v-row justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col cols="12" md="4">
        <UserFilter
          v-for="(filter, i) in filterList"
          :name="filter.name"
          :content="filter.content"
          :key="i"
        />
      </v-col>

      <v-col cols="12" md="4">
        <UserList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import UserList from "./user/UserList.vue";
import UserFilter from "./user/UserFilter.vue";

export default {
  name: "ContentBlock",

  components: { UserFilter, UserList },

  computed: {
    ...mapGetters("users", ["filterList"]),
  },
};
</script>
