<template>
  <ValidationObserver ref="frmExampe" v-slot="vee">
    <card
      title="Form example"
      :ok-btn-disabled="vee.invalid"
      :reset-btn-disabled="!vee.dirty"
      ok-btn="Save"
      reset-btn="Reset"
      @save="onSave"
      @reset="onReset"
    >
      <b-row>
        <b-col>
          <base-input
            v-model="record.name"
            label="Name"
            placeholder="john foo"
            vee-rules="required|min:5"
          />
          <base-input
            v-model="record.email"
            type="email"
            name="email"
            label="Email"
            placeholder="john@foo.com"
            vee-rules="required|email"
          />
        </b-col>
        <b-col>
          <base-input
            v-model="record.age"
            type="number"
            label="Age"
            vee-rules="required|digits:2|min_value:18"
          />
        </b-col>
      </b-row>
    </card>
    <h4 class="mt-4">Form data (record)</h4>
    <div class="alert alert-info" role="alert">
      {{ record }}
    </div>
    <h4 class="mt-4">Vee Validator Observer data</h4>
    <div class="alert alert-info" role="alert">
      {{ vee }}
    </div>
    <h4 class="mt-4">Form Code</h4>
    <div class="alert alert-info" role="alert">
      <code>
        &lt;ValidationObserver ref="frmExampe" v-slot="vee"&gt;<br />
        &lt;base-input v-model="record.name" label="Name" placeholder="john foo"
        vee-rules="required|min:5" /&gt; <br />&lt;base-input
        v-model="record.email" type="email" name="email" label="Email"
        placeholder="john@foo.com" vee-rules="required|email" /&gt;
        <br />&lt;base-input v-model="record.age" type="number" label="Age"
        vee-rules="required|digits:2|min_value:18" /&gt;<br />
        &lt;/ValidationObserver&gt;
      </code>
    </div>
  </ValidationObserver>
</template>

<script>
import { cloneDeep } from 'lodash'
import { ValidationObserver } from 'vee-validate'
import Card from '~/components/common/card'

export default {
  name: 'Demo',
  components: { ValidationObserver, Card },
  data() {
    return {
      record: {
        name: '',
        email: '',
        age: 0
      },
      recordSnapshot: {
        name: '',
        email: '',
        age: 0
      }
    }
  },
  methods: {
    onSave() {
      alert('make an API request!')
      this.onReset()
    },
    onReset() {
      this.record = cloneDeep(this.recordSnapshot)
      requestAnimationFrame(() => {
        this.$refs.frmExampe.reset()
      })
    }
  }
}
</script>
