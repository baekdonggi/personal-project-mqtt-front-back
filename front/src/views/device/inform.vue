<template>
  <div>
    <b-modal id="modal-device-inform" :title="getTitle" @ok="onSubmit">
      <b-form-group v-if="inputMode === 'update'" label-cols="4" label="id" label-for="id">
        <b-form-input id="id" v-model="device.id" disabled></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4 " label="장비이름" label-for="name">
        <b-form-input id="name" v-model="device.name"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label="장비모델명" label-for="deviceModelName">
        <b-form-input id="deviceModelName" v-model="device.deviceModelName"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label="모델명" label-for="manufacturer">
        <b-form-input id="manufacturer" v-model="device.manufacturer"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label="설치위치" label-for="location">
        <b-form-input id="location" v-model="device.location"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label="엣지 시리얼 넘버" label-for="edgeSerialNumber">
        <b-form-input id="edgeSerialNumber" v-model="device.edgeSerialNumber"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="4" label="통신인터페이스" label-for="networkInterface">
        <b-form-input id="networkInterface" v-model="device.networkInterface"></b-form-input>
      </b-form-group>
      <b-form-group v-if="inputMode === 'insert'" label-cols="4" label="통신설정정보" label-for="networkConfig">
        <b-form-textarea id="networkConfig" v-model="device.networkConfig" no-resize></b-form-textarea>
      </b-form-group>
      <b-form-group v-if="inputMode === 'insert'" label-cols="4" label="상세정보" label-for="desctiption">
        <b-form-textarea id="desctiption" v-model="device.desctiption" no-resize></b-form-textarea>
      </b-form-group>
      <b-form-group v-if="inputMode === 'update'" label-cols="4" label="등록일" label-for="createdAt">
        <b-form-input id="createdAt" v-model="device.createdAt" disabled></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      device: {
        id: null,
        name: null,
        deviceModelName: null,
        manufacturer: null,
        location: null,
        edgeSerialNumber: null,
        networkInterface: null,
        networkConfig: null,
        desctiption: null,
        createdAt: null
      }
    }
  },
  computed: {
    infoData() {
      return this.$store.getters.Device
    },
    inputMode() {
      return this.$store.getters.DeviceInputMode
    },
    getTitle() {
      let title = ''
      if (this.inputMode === 'insert') {
        title = '장비 등록'
      } else if (this.inputMode === 'update') {
        title = '장비 수정'
      }
      return title
    }
  },
  watch: {
    // 모달이 열린 이후에 감지됨
    infoData(value) {
      this.device = { ...value }
    }
  },
  created() {
    // 모달이 최초 열릴 때 감지됨
    this.device = { ...this.infoData }
  },
  methods: {
    onSubmit() {
      // console.log('onSubmit', { ...this.device })
      // 1. 등록인 경우
      if (this.inputMode === 'insert') {
        this.$store.dispatch('actDeviceInsert', this.device)
      }

      // 2. 수정인 경우
      if (this.inputMode === 'update') {
        this.$store.dispatch('actDeviceUpdated', this.device)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
