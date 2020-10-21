<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="5"
        >
          <v-text-field
            v-model="car"
            :rules="nameRules"
            :counter="4"
            label="Carro"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="5"
        >
          <v-select :items="items" label="Categoria"></v-select>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
          <v-btn color="info" class="my-5 ml-5" @click="toSave">Salvar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  data: () => ({
    items: ["FICHAS DO DIA", "PLANOS DO DIA", "PEDIR"],
  }),
  methods: {

  }
};
</script>