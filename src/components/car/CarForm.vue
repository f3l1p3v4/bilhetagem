<template>
    <div class="row">
        <div class="col-xs-12 10 col-md-6 col lg-4 col-xl-4">
            <Form :form-model="innerFormModel">
                <template #formTabs>
                    <v-tab name="general" icon="md-home">Geral</v-tab>
                </template>
            </Form>
        </div>
    </div> 
</template>

<script>
import Form from '../base/Form';
import { cloneDeep } from 'lodash';
//import Car from '../../models/Car';

export default {
    name: 'CarForm',
    props: {
        formModel: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            innerFormModel: null
        }
    },
    methods: {
        updateModelOnError (model) {
            this.innerFormModel = cloneDeep(model);
        }
    },
    async beforeMount () {
        this.innerFormModel = cloneDeep(this.formModel);
    },
    components: {
        Form
    }
}
</script>