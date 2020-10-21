<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-icon>mdi-bus-side</v-icon>
      <span class="title ml-3 mr-5">
        Bilhetagem&nbsp;
        <span class="font-weight-light">Consórcio</span>
      </span>
    </v-app-bar>

    <v-main>
      <Form />
      <List />
    </v-main>

    <v-footer app>
      <v-col class="text-center">
        &copy; 2020/{{ new Date().getFullYear() }} — Copyright. Site desenvolvido por
        <strong>Felipe Valdez 🚀</strong>
      </v-col>
    </v-footer>
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
  })
};
</script>
