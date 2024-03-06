

var app = new Vue({
  el: '#app',
  data: {
    input: '100',
    error: ''
  },
  methods: {
  },
  computed: {
    output : function() {
      let f
      try {
        f = parseFloat(this.input)
        console.log('f', f)
      } catch(e) {
        return 'NaN'
      }

      // convert kWh/km to miles/kWh
      const reciprocal = 1 / (f/1000) // km/kWh
      const miles = reciprocal * 0.621371
      const out = miles.toFixed(1)
      return out
    },
    messageClass () {
      return {
        'md-invalid': (this.error.length > 0)
      }
    }
  }
})
