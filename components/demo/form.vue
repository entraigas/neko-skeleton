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
          <base-autocomplete
            v-model="record.option"
            :options="options"
            :serializer="s => s.text"
            label="Option"
            placeholder="Select an option..."
            vee-rules="required"
            @hit="onSelect"
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
      <code>&lt;ValidationObserver ref="frmExampe" v-slot="vee"&gt;</code>
      <br />
      <code>
        &lt;base-input v-model="record.name" label="Name" placeholder="john foo"
        vee-rules="required|min:5" /&gt;
      </code>
      <br />
      <code
        >&lt;base-input v-model="record.email" type="email" name="email"
        label="Email" placeholder="john@foo.com" vee-rules="required|email"
        /&gt;
      </code>
      <br />
      <code>
        &lt;base-input v-model="record.age" type="number" label="Age"
        vee-rules="required|digits:2|min_value:18" /&gt;
      </code>
      <br />
      <code>
        &lt;base-autocomplete v-model="record.option" :options="[{value, text},
        {value, text}] :serializer="(s) => s.text" label="Option"
        placeholder="Select an option..." /&gt;
      </code>
      <br />
      <code>&lt;/ValidationObserver&gt;</code>
    </div>
  </ValidationObserver>
</template>

<script>
import { cloneDeep } from "lodash";
import { ValidationObserver } from "vee-validate";
import Card from "~/components/common/card";

export default {
  name: "Demo",
  components: { ValidationObserver, Card },
  data() {
    return {
      options: [
        { value: 1, text: "option 1" },
        { value: 2, text: "option 2" },
        { value: 3, text: "option 3" },
        { value: 4, text: "option 4" }
      ],
      record: {
        name: "",
        email: "",
        age: 0,
        option: ""
      },
      recordSnapshot: {
        name: "",
        email: "",
        age: 0,
        option: ""
      }
    };
  },
  methods: {
    onSelect(value) {
      this.record.option = value;
    },
    onSave() {
      alert("make an API request!");
      this.onReset();
    },
    onReset() {
      this.record = cloneDeep(this.recordSnapshot);
      requestAnimationFrame(() => {
        this.$refs.frmExampe.reset();
      });
    }
  }
};
</script>
