<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer">
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile
            v-for="item in users"
            :key="item.id"
            @click.prevent
          >

            <v-list-tile-content>
              <v-list-tile-title v-text="item.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="item.id === 2 ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{user.room}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div>
        <nuxt/>
      </div>
    </v-content>
  <nuxt/>
  </v-app>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
export default {
  computed:mapState(['user']),
    data: () =>({
        drawer:true,
        users:[
            {id:1,name:'User1'},
            {id:2,name:'User2'}
        ]
    }),
    methods:{
      ...mapMutations(['clearData']),
      exit(){
          this.$router.push('/?message=left')
          this.clearData();
      }
    }
}
</script>
