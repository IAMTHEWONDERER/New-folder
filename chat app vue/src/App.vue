<template>
  <div id="app">
    <ChatRoom userId="user123" mentorId="mentor456" />
  </div>
</template>

<script>
import ChatRoom from './components/chatRoom.vue';

export default {
  name: 'App',
  components: {
    ChatRoom,
  },
};
</script>