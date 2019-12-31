<template>
    <div>
      <ul>
        <li v-for="m in message" :key="m.text">
          {{m.text}}
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        middleware:['chat'],
        head(){
            return{
                title:`Комната ${this.user.room}`
            }
        },
        name: "chat",
        computed:mapState(['user','message'])
    }
</script>

<style scoped>

</style>
