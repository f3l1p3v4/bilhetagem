<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-icon>mdi-bus</v-icon>
        <v-span>Bilhetagem</v-span>
      </div>
    </v-app-bar>

    <v-main>
      <Form />
      <List />
    </v-main>
  </v-app>
</template>

<script>
import Form from './components/Form';
import List from './components/List';

export default {
  name: 'App',
  components: {
    Form,
    List
  },
  data: () => ({
    //
  }),
};
</script>
