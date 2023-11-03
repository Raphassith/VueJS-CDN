export default {
    data() {
        return {}
    },
    template: `<button @click="$emit('clickMe', 'Hello World!')">Click Me</button>`
}