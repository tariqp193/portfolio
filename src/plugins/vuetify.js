import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' 
    },
    theme: {
        themes: {
          light: {
            primary: colors.teal.lighten1, 
            secondary: colors.shades.white, 
            accent: colors.indigo.base, 
            paragraph: colors.shades.black
          },
          dark: { 
            primary: colors.teal.lighten1,
            secondary: '#152238',
            paragraph: colors.shades.white,
            tiles: '#001A38'
          }
        },
      },
});
