import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: colors.black,
        secondary: '#c0d8ed', 
        accent: '#4ea3ed',
        error: '#b71c1c',
        info: '#2196f3',
        success: '#66bb6a', 
        warning: '#f57f17',
      },
    },
  },
})