<template>
  <v-form 
    v-model="valid" 
    style="width: 100%; max-width: 1200px; margin: 0 auto;" 
  >
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
          <v-btn color="#2ebc4f" dark @click="toSave">Salvar</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog de Erro nos campos-->
    <template>
        <v-row justify="center">
            <v-dialog v-model="dialogError" max-width="320">
              <v-card class="text-center">
                <v-icon color="red" size="36" class="mt-6">mdi-emoticon-sad</v-icon>

                <v-card-title class="headline">Ops algo deu errado!</v-card-title>

                <v-card-text>Favor tente preencher todos os campos corretamente!!!</v-card-text>

              </v-card>
            </v-dialog>
        </v-row>
    </template>

    <!-- Dialog de Erro repetição de dados-->
    <template>
        <v-row justify="center">
            <v-dialog v-model="dialogRepeated" max-width="350">
              <v-card class="text-center">
                <v-icon color="red" size="36" class="mt-6">mdi-emoticon-sad</v-icon>

                <v-card-title class="headline">Carro com defeito repetido!</v-card-title>

                <v-card-text>Favor tente preencher com carro ou defeito diferente!!!</v-card-text>

              </v-card>
            </v-dialog>
        </v-row>
    </template>
    <!-- Loading -->
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-form>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";

export default {
  data: () => ({
    valid: false,
    dialogError: false,
    dialogRepeated: false,
    repeated: false,
    saved: [],
    overlay: false,
    busCurrent: [],
    bus: '',
    categorie: '',
    group: '',
    status: '',
    items: [" ", "Fichas do dia", "Planos do dia", "Pedidos"],
    groups: [" ", "Validador", "Catraca", "Câmera", "Tablet", "G100", "Filmagem", "Switch", "Telemetria", "Itinerário", "Tacógrafo"],
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
        bus.status = this.status;

        HttpRequestUtil.saveBushes(bus).then(response => {
          this.saved = response;
          this.overlay = !this.overlay;
          window.location.reload();
        });

      }
    },

    validate() {
      if (this.bus == "" || this.categorie == "") {
        this.dialogError = true;
        this.dialogTime();
        return false;
      } else {
        
        for(let i = 0; i < this.busCurrent.length; i++) {
          if(
            this.bus == this.busCurrent[i].bus
            && this.categorie == this.busCurrent[i].categorie
            && this.group == this.busCurrent[i].group
            ) {
            this.repeated = true;
          }
        }

        if(this.repeated) {
          this.dialogRepeated = true;
          this.dialogTime();
          
          return false;
        } else {
          return true;
        }

      }
    },
    searchBushes() {
      HttpRequestUtil.searchBushes().then(response => {
        this.busCurrent = response;
      });
    },
    dialogTime () {
      setTimeout(() => {
        this.dialogError = false;
        this.dialogRepeated = false;
      }, 4000)
    },
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false;
        this.dialogRepeated = false;
      }, 5000)
    },
  },
  mounted() {
    this.searchBushes();
  }
};
</script>