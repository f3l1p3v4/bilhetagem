<template>
<v-app style="max-width: 1400px; margin: 0 auto;">
  <v-form v-model="valid">
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
          <v-select :items="items" label="Categoria" v-model="categorie"></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select :items="groups" label="Grupo de defeito" v-model="group"></v-select>
        </v-col>

        <v-col
          cols="12"
          md="1"
          style="margin: auto"
        >
          <v-btn color="info" @click="toSave">Salvar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

  <v-row>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>FICHAS DO DIA</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(dayFile, i) in dayFiles"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="`${dayFile.bus} - ${dayFile.group}`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>PLANOS DO DIA</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(dayplan, i) in dayPlans"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="dayplan.bus"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
    <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto"
      max-width="300"
      tile
      elevation="11"
    >
      <v-list rounded>
        <v-subheader>PEDIR</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="green"
        >
          <v-list-item
            v-for="(as, i) in ask"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>mdi-bus-side</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="`${as.bus} - ${as.group}`"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</v-row>
</v-app>
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
    dayFiles: [],
    dayPlans: [],
    ask: [],
    items: ["FICHAS DO DIA", "PLANOS DO DIA", "PEDIR"],
    groups: ["VALIDADOR", "CATRACA", "CÂMERA", "TABLET", "G100", "SWITCH"],
    busRules: [
      v => !!v || 'Carro é obrigatório',
      v => v.length <= 4 || 'Carro deve ter apenas 4 caracteres',
    ],
    selectedItem: 1,
    categories: [
      { text: '4230', icon: 'mdi-bus-side' },
      { text: '4232', icon: 'mdi-bus-side' },
      { text: '4006', icon: 'mdi-bus-side' },
      { text: '4202', icon: 'mdi-bus-side' },
      { text: '4251', icon: 'mdi-bus-side' },
      { text: '4251', icon: 'mdi-bus-side' },
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
        alert("Algo deu errado");
      }
        this.clearFields();
    },

    validate() {
      if (this.bus == "" || this.categorie == "") {
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

    searchDayFiles() {
      HttpRequestUtil.filterBushes("FICHAS DO DIA").then(response => {
        this.dayFiles = response;
      });
    },

    searchDayPlans() {
      HttpRequestUtil.filterBushes("PLANOS DO DIA").then(response => {
        this.dayPlans = response;
      });
    },

    searchAsk() {
      HttpRequestUtil.filterBushes("PEDIR").then(response => {
        this.ask = response;
      });
    },
  },
  mounted() {
    this.searchDayFiles();
    this.searchDayPlans();
    this.searchAsk();
  }
};
</script>