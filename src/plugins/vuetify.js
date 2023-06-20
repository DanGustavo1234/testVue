// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({

  icons: {
  iconfont: 'mdi' || 'fa' || 'fa4' || 'faSvg',
  
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  
)
