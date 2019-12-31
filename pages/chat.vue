<template>
    <div class="c-wrap">
      <div class="c-chat">
        <Message
          v-for="(m,index) in message" :key="index"
          :name="m.name"
          :text="m.text"
          :owner="m.id === user.id"
        />
      </div>
      <div class="c-form">
        <ChatForm/>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Message from "../components/Message";
  import ChatForm from "../components/ChatForm";
    export default {
        middleware:['chat'],
        head(){
            return{
                title:`Комната ${this.user.room}`
            }
        },
        name: "chat",
        components:{Message,ChatForm},
        computed:mapState(['user','message'])
    }
</script>

<style scoped>
  .c-wrap{
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .c-form{
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 1rem;
    height: 80px;
    background: #212121;
  }
  .c-chat{
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;
  }
</style>
