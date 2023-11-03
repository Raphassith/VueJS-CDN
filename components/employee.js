export default {
    data() {
      return {}
    },
    props: [
        'firstName',
        'lastName',
        'lang'
    ],
    template: `<li>{{firstName}} {{lastName}} {{lang}}</li>`
  }