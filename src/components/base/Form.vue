<template>
    <v-form 
        ref="form"
        :greedy="true"
        :autofocus="true"
        @validation-error="$emit('validation-error')"
    >
        <div class="row">
            <div class="col-12">
                <v-tabs
                    v-model="tab"
                    class="text-primary"
                    align="left"
                    ref="Tabs"
                >
                    <slot name="formTabs" ref="tabsSlot" :setTab="setTab" />
                </v-tabs>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <v-tab-panels >
                    <slot name="panels" />
                </v-tab-panels>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="v-gutter-x-md float-right">
                    <slot name="formActions"/>
                    <v-btn color="secondary" @click="$router.go(-1)">Voltar</v-btn>
                    <v-btn color="primary" @click="save">Salvar</v-btn>
                </div>
            </div>
        </div>
    </v-form>
</template>

<script>
import { snakeToCamel } from '../../lib/Common';

export default {
    name: 'Form',
    props: {
        formModel: {
            type: Object,
            required: true
        },
        initialTab: String
    },
    data () {
        return {
            tab: '',
            innerFormModel: null
        }
    },
    methods: {
        async save () {
            const form = this.$refs.form;
            const valid = await form.validate(true);

            if (valid === true) {
                const resourceName = this.formModel.singularResourceName;
                const response = await this.$store.dispatch(`${snakeToCamel(resourceName)}/save`, { [resourceName]: this.formModel });
                if (response.success === true) {
                    alert('Salvo com sucesso!!!');
                    this.$router.go(-1);
                } else if (response.status === 422) {
                    alert('Erro ao validar informações');
                    this.$emit('updateModelOnError', this.formModel);
                } else if (response.status === 403) {
                    alert('Ação não autorizada');
                }
            } else {
                return { success: false }
            }
        },
        async valid () {
            return this.$refs.form.validate(true);
        },
        setTab (tab) {
            this.tab = tab;
        }
    },
    mounted () {
        this.$refs.form.resetValidation();
        this.tab = this.$refs?.$slots?.default[0]?.componentOptions?.propsData?.name || '';

    }
}
</script>