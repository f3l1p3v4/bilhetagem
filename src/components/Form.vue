<template>
  <v-form v-model="valid" style="max-width: 1400px; margin: 0 auto;">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="bus"
            :rules="busRules"
            :counter="4"
            label="Carro"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select :items="items" label="Categoria"></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select :items="group" label="Grupo de defeito"></v-select>
        </v-col>

        <v-col
          cols="12"
          md="1"
          style="margin: auto"
        >
          <v-btn color="info">Salvar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";

export default {
  data: () => ({
    valid: false,
    bus: '',
    categorie: '',
    group: '',
    bushes: [],
    items: ["FICHAS DO DIA", "PLANOS DO DIA", "PEDIR"],
    groups: ["VALIDADOR", "CATRACA", "CÂMERA", "TABLET", "G100", "SWITCH"],
    busRules: [
      v => !!v || 'Carro é obrigatório',
      v => v.length <= 4 || 'Carro deve ter apenas 4 caracteres',
    ],
  }),
  methods: {
    toSave() {
      let valid = this.validate();

      if (valid) {
        let bus = {};
        bus.bus = this.bus;
        bus.categorie = this.categorie;
        bus.group = this.group;

        HttpRequestUtil.saveBushes(bus).then(response => {
          this.bushes.push(response);
          this.searchBushes()
        });
      } else {
        alert("Algo deu errado")
      }
        this.clearFields();
    },

    validate() {
      if (this.bus == "" || this.categorie == "" || this.group == "") {
        return false;
      } else {
        return true;
      }
    },

    clearFields() {
      this.bus = "";
      this.categorie = "";
      this.group = "";
    },

    searchBushes() {
      HttpRequestUtil.searchBushes().then(response => {
        this.bushes = response;
      });
    },
  },
  mounted() {
    this.searchUsers();
  }
};
</script>