<template>
  <v-app 
    class="blue-grey lighten-5"
    style="width: 100%; max-width: 1200px; margin: 40px auto;"
  >
    <div class="ma-6 rounded-lg">
      <div class="text-center pt-4 mr-12 ml-12">
        <h1>Cadastro de Materiais</h1>
      </div>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <!-- Coluna Username -->
            <v-col cols="12" md="3">
              <v-text-field
                v-model="bus"
                label="Carro"
                required
                type="text"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-select :items="itinerarioItem" label="Itinerário" v-model="itinerario"></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-select :items="commandItem" label="Comando/Modelo" v-model="command"></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-select :items="tabletItem" label="Tablet" v-model="tablet"></v-select>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn color="red" class="white--text">Cancelar</v-btn>
            <v-btn color="#2ebc4f" class="my-5 ml-5 white--text" @click="toSave">Salvar</v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
    <!--List users-->
    <div class="ma-6">
      <v-card class="rounded-Xg">
        <div class="text-center pt-4">
          <h1>Materias</h1>
        </div>
        <v-simple-table class="pa-6 rounded-lg">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center subtitle-2">CARRO</th>
                <th class="text-center subtitle-2">ITINERÁRIO</th>
                <th class="text-center subtitle-2">COMANDO</th>
                <th class="text-center subtitle-2">TABLET</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="info in infos" :key="info.id">
                <td class="text-center">{{ info.bus }}</td>
                <td class="text-center" > {{ info.itinerario }}</td>
                <td class="text-center" > {{ info.command }}</td>
                <td class="text-center" > {{ info.tablet }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        
        <template>
          <v-row justify="center">
            <!-- Dialog de edição-->
            <v-dialog v-model="dialogEdit" max-width="290">
              <v-card>
                <v-card-title class="headline">Olá Admin!</v-card-title>

                <v-card-text>Deseja realmente editar do produto?</v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="red" text @click="dialogEdit = false">Cancelar</v-btn>

                  <v-btn color="info" text @click="statusUser()">Aceitar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>

        <template>
          <v-row justify="center">
            <!-- Dialog de Erro nos campos-->
            <v-dialog v-model="dialogErro" max-width="290">
              <v-card class="text-center">
                <v-icon color="red" size="36" class="mt-6">mdi-emoticon-sad</v-icon>

                <v-card-title class="headline">Ops algo deu errado!</v-card-title>

                <v-card-text>Favor completar todos os campos!!!</v-card-text>

              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-card>
    </div>
    <!-- Loading -->
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import HttpRequestUtil from "@/util/HttpRequestUtil";
export default {
  data: () => ({
    valid: false,
    notRegistered: false,
    userStatus: null,
    saved: false,
    dialogErro: false,
    overlay: false,
    //Icones
    edit: "mdi-pencil",
    remove: "mdi-delete",
    active: true,
    bus: "",
    itinerario: "",
    tablet: "",
    command: "",
    itinerarioItem: ['Mobitec 13X128', 'Mobitec 11X112', 'Mobitec 11X96', 'Mobitec 10X96', 'Mobitec 7X96'],
    tabletItem: ['IMXT', 'DL'],
    commandItem: ['SETBUS R 1.16', 'ICU403', 'ICU402', 'ICU302', '150CR', '100FS'],
    infos: [],
    productRules: [
      v => !!v || "Produto é obrigatório",
      v => v.length <= 15 || "Produto deve ter no máximo 15 caracteres"
    ],
    providerRules: [
      v => !!v || "Fornecedor é obrigatória",
      v => v.length <= 15 || "Fornecedor deve ter no máximo 15 caracteres"
    ],
    priceRules: [
      v => !!v || "Preço é obrigatória",
      v => v.length <= 7 || "Preço deve ter no máximo 7 caracteres"
    ]
  }),
  methods: {
    toSave() {
      let valid = this.validate();
      if (valid) {
        this.loading = true;
        
        let info = {};
        info.bus = this.bus;
        info.itinerario = this.itinerario;
        info.tablet = this.tablet;
        info.command = this.command;

        HttpRequestUtil.saveInfos(info).then(response => {
          response;
          this.saved = true;
          this.searchInfo();
        });
      } else {
        this.notRegistered = true;
        this.dialogErro = true;
      }
    },
    validate() {
      if (this.bus == "" || this.itinerario == "" || this.tablet == "" || this.command == "" ) {
        return false;
      } else {
        return true;
      }
    },
    searchInfo() {
      HttpRequestUtil.searchInfos().then(response => {
        this.infos = response;
      });
    },
  },
  mounted() {
    this.searchInfo();
  }
};
</script>