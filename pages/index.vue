<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-btn @click="message()">New Message</v-btn>
    <h1>Title</h1>
  </v-layout>
</template>

<script>
export default {
    sockets: {
        connect() {
            console.log('Client Socket')
        }
    },
    methods: {
        message() {
            this.$socket.emit('createMessage', {
                text:'From Client'
            })
        }
    }
}
</script>
