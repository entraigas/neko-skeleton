import { get } from "lodash";
export default function({ $axios, app, store }) {
  $axios.onError(error => {
    const status = parseInt(get(error, "response.status", 200), 10);
    // Token is invalid (or too many request flood the api), logout user!
    const errors = [401, 429];
    if (errors.includes(status)) {
      //   app.store.dispatch('resetStore')
      //   app.$auth.logout()
    }
  });
}
