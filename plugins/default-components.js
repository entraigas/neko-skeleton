import Vue from "vue";
import Icon from "vue-awesome";
import BaseInput from "~/components/common/form/base-input";
import BaseSelect from "~/components/common/form/base-select";
import BaseTextarea from "~/components/common/form/base-textarea";
import BaseCheckbox from "~/components/common/form/base-checkbox";
import BaseAutocomplete from "~/components/common/form/base-autocomplete";
import BaseField from "~/components/common/form/base-field";

Vue.component("v-icon", Icon);
// <v-icon name="sort-down" />
Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseSelect.name, BaseSelect);
Vue.component(BaseTextarea.name, BaseTextarea);
Vue.component(BaseCheckbox.name, BaseCheckbox);
Vue.component(BaseAutocomplete.name, BaseAutocomplete);
Vue.component(BaseField.name, BaseField);
