<template>
  <card title="Input Validation" class="my-5">
    <p>
      More validation rulers in
      <a
        href="https://github.com/logaretm/vee-validate/blob/master/docs/api/rules.md"
        >https://github.com/logaretm/vee-validate</a
      >
    </p>

    <code>
      &lt;base-input v-model="email" vee-rules="required|email" /&gt;
    </code>
    <base-input
      v-model="email"
      type="email"
      name="email"
      label="Email"
      placeholder="john@foo.com"
      vee-rules="required|email"
    />

    <code>
      &lt;base-input v-model="number" vee-rules="required|digits:1" /&gt;
    </code>
    <base-input
      v-model="number"
      type="number"
      name="number"
      label="Number"
      vee-rules="required|digits:1"
    />

    <code>
      &lt;base-textarea v-model="textarea" vee-rules="required|alpha|min:5"
      /&gt;
    </code>
    <base-textarea
      v-model="textarea"
      label="TextArea"
      name="textarea"
      placeholder="entet text here..."
      help="Al least 5 characters"
      vee-rules="required|alpha|min:5"
    />

    <code>
      &lt;base-select v-model="selected"
      vee-rules="required|min_value:1|max_value:2" /&gt;
    </code>
    <base-select
      v-model="selected"
      :options="options"
      name="select"
      label="Select"
      first="Select an option..."
      vee-rules="required|min_value:1|max_value:2"
    />

    <code>
      &lt;base-autocomplete v-model="autocomplete" :options="options"
      :serializer="(s) => s.text" vee-rules="required" /&gt;
    </code>
    <base-autocomplete
      v-model="autocomplete"
      :options="options"
      :serializer="s => s.text"
      label="Typeahead"
      placeholder="Select an option..."
      vee-rules="required"
    />
  </card>
</template>

<script>
import Card from "~/components/common/card";

export default {
  name: "Demo",
  components: { Card },
  data() {
    return {
      email: "",
      number: 0,
      textarea: "",
      selected: null,
      autocomplete: null,
      options: [
        { value: 1, text: "option 1" },
        { value: 2, text: "option 2" },
        { value: 3, text: "option 3" },
        { value: 4, text: "option 4" }
      ]
    };
  }
};
</script>
