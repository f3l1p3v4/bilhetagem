<template>
    <v-app id="inspire" class="blue-grey lighten-5">
        <Form />
        <List />
    </v-app>
</template>

<script>
import Form from '../components/Form';
import List from '../components/List';

  export default {
    components: {
      Form,
      List
    },
  }
</script>
