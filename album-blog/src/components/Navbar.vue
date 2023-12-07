<template>
    <v-container fluid>
      <v-app-bar
        app
        color="primary"
        dark
      >
        <v-spacer></v-spacer>
        <v-btn outlined class="btn">
        <router-link to="/" id="link">Home</router-link>
      </v-btn>
      </v-app-bar>
    </v-container>
</template>

<style scoped>

#link {
    color: white;
    text-decoration: none;
}
</style>