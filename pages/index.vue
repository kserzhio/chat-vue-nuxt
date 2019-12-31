<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-card-title>
          <h1>
            Nuxt Chat
          </h1>
        </v-card-title>
        <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Ваше Имя"
            required
          ></v-text-field>

          <v-text-field
            v-model="room"
            :rules="roomRules"
            label="Введите комнату"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="submit"
          >
            Войти
          </v-btn>
        </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    layout:'empty',
    head:{
        title:'Добро пожаловать'
    },
    sockets: {
        connect() {
            console.log('Client Socket')
        }
    },
    data(){
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Введите имя',
                v => (v && v.length <= 16) || 'Имя не должно превышаит 16 символов',
            ],
            room: '',
            roomRules: [
                v => !!v || 'Введите комнату',
            ],
        }
    },
    methods: {
        message() {
            this.$socket.emit('createMessage', {
                text:'From Client'
            })
        },
        ...mapMutations(["setUser"]),
        submit () {
            if (this.$refs.form.validate()) {
              const user = {
                  name: this.name,
                  room:this.room
              };
              this.$socket.emit('userJoin', user, data => {
                  if(typeof data === 'string'){
                      console.error(data)
                  } else {
                      user.id = data.userId;
                      this.setUser(user);
                      this.$router.push('/chat');
                  }
              });
            }
        },

    }
}
</script>
