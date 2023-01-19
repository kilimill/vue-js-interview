<template>
  <v-card max-width="450" class="mx-auto">
    <v-card-title v-text="'List'"></v-card-title>

    <v-list three-line v-if="filteredUsers.length">
      <UserCard v-for="(user, i) in filteredUsers" :user="user" :key="i" />
    </v-list>

    <v-skeleton-loader
      v-else
      type="list-item-avatar, list-item-two-line"
    ></v-skeleton-loader>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import UserCard from "./UserCard.vue";

export default {
  name: "UserList",

  components: { UserCard },

  computed: {
    ...mapGetters("users", ["filteredUsers"]),
  },

  methods: {
    getUsers() {
      axios
        .get("/users.json")
        .then(({ data }) => this.$store.dispatch("users/setUsers", data))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
