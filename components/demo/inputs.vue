<template>
  <div>
    <card title="Input types" class="my-5">
      <code>
        &lt;base-input v-model="text" /&gt;
      </code>
      <base-input v-model="text" name="text" />

      <code>
        &lt;base-input v-model="email" type="email" /&gt;
      </code>
      <base-input v-model="email" name="email" type="email" />

      <code>
        &lt;base-input v-model="password" type="password" /&gt;
      </code>
      <base-input v-model="password" name="password" type="password" />

      <code>
        &lt;base-input v-model="number" type="number" /&gt;
      </code>
      <base-input v-model="number" type="number" name="age" />

      <code>
        &lt;base-input v-model="number" type="range" /&gt;
      </code>
      <base-input v-model="number" name="password" type="range" />
    </card>

    <card
      title="Input props: label, disabled, placeholder &amp; help"
      class="my-5"
    >
      <code>
        &lt;base-input v-model="text" /&gt;
      </code>
      <base-input v-model="text" name="text" />

      <code>
        &lt;base-input v-model="text" label="Name" /&gt;
      </code>
      <base-input v-model="text" name="text" label="Name" />

      <code>
        &lt;base-input v-model="text" label="Name" disabled /&gt;
      </code>
      <base-input v-model="text" name="text" label="Name" disabled />

      <code>
        &lt;base-input v-model="text" label="Name" placeholder="some text..."
        /&gt;
      </code>
      <base-input
        v-model="text"
        name="text"
        label="Name"
        placeholder="some text..."
      />

      <code>
        &lt;base-input v-model="text" label="Name" placeholder="some text..."
        help="At least 6 characters"/&gt;
      </code>
      <base-input
        v-model="text"
        name="text"
        label="Name"
        placeholder="some text..."
        help="At least 6 characters"
      />
    </card>

    <card title="Input sizes" class="my-5">
      <p>
        You can use <mark>sm</mark>, <mark>md</mark> &amp;
        <mark>lg</mark> sizes. By default use md
      </p>
      <code>
        &lt;base-input v-model="text" label="Name" size="[sm|md|lg]" /&gt;
      </code>
      <base-input
        v-model="text"
        name="text"
        label="Name"
        size="sm"
        placeholder="sm"
      />
      <base-input
        v-model="text"
        name="text"
        label="Name"
        placeholder="by default use md"
      />
      <base-input
        v-model="text"
        name="text"
        label="Name"
        size="lg"
        placeholder="lg"
      />
    </card>

    <card title="Textarea" class="my-5">
      <code>
        &lt;b-textarea v-model="text" label="TextArea" placeholder="entet text
        here..." /&gt;
      </code>
      <b-textarea
        v-model="text"
        name="textarea"
        label="TextArea"
        placeholder="entet text here..."
      />
    </card>

    <card title="Checkbox &amp; Switch" class="my-5">
      <code>
        &lt;base-checkbox v-model="check" label="Checkbox" placeholder="Enable
        feature" /&gt;
      </code>
      <base-checkbox
        v-model="check"
        name="switch"
        label="Checkbox"
        placeholder="Enable feature"
      />

      <code>
        &lt;base-checkbox v-model="check" label="Switchbox" placeholder="Enable
        feature" is-switch /&gt;
      </code>
      <base-checkbox
        v-model="check"
        name="check"
        label="Switchbox"
        placeholder="Enable feature"
        is-switch
      />
    </card>

    <card title="Select" class="my-5">
      <code>
        &lt;base-select v-model="selected" :options="[{value, text}, {value,
        text}] first="Select an option..." /&gt;
      </code>
      <base-select
        v-model="selected"
        :options="options"
        label="Select"
        first="Select an option..."
        name="select"
      />
    </card>

    <card title="Autocomplete" class="my-5">
      <code>
        &lt;base-autocomplete v-model="selected" :options="[{value, text},
        {value, text}] :serializer="(s) => s.text" label="Typeahead"
        placeholder="Select an option..." help="At least 2 characters" /&gt;
      </code>
      <base-autocomplete
        v-model="ac"
        :options="options"
        :serializer="s => s.text"
        label="Typeahead"
        placeholder="Select an option..."
        help="At least 2 characters"
        @hit="onSelect"
      />
    </card>
  </div>
</template>

<script>
import Card from "~/components/common/card";

export default {
  name: "Demo",
  components: { Card },
  data() {
    return {
      text: "",
      password: "",
      email: "",
      number: 0,
      ac: null,
      selected: null,
      options: [
        { value: 1, text: "option 1" },
        { value: 2, text: "option 2" },
        { value: 3, text: "option 3" },
        { value: 4, text: "option 4" }
      ],
      check: true
    };
  },
  methods: {
    onSelect(value) {
      alert(JSON.stringify(value));
    }
  }
};
</script>

<style>
.container {
  margin-bottom: 10vh;
}
</style>
