<template>
  <div>
    <b-list-group-item
      href="#"
      :style="this.$route.path === '/dashboard' ? 'background-color: #F54040' : 'background-color:white'"
      @click="gogo('/dashboard')"
      >부서 관리</b-list-group-item
    >
    <b-list-group-item
      href="#"
      :style="this.$route.path === '/department' ? 'background-color: #F5B840' : 'background-color:white'"
      @click="gogo('/department')"
      >부서 관리</b-list-group-item
    >
    <b-list-group-item
      href="#"
      :style="this.$route.path === '/user' ? 'background-color: #F5F540' : 'background-color:white'"
      @click="gogo('/user')"
      >사용자 관리</b-list-group-item
    >
    <b-list-group-item
      href="#"
      :style="this.$route.path === '/device' ? 'background-color: #40D0F5' : 'background-color:white'"
      @click="gogo('/device')"
      >장비 관리</b-list-group-item
    >
  </div>
</template>
:style="조건 ? 빨 " 흰 "
<script>
export default {
  // methods 랑 data , watch, created , computed 넣을수있다.
  methods: {
    gogo(study) {
      if (this.$route.path !== study) {
        this.$router.push(study)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
