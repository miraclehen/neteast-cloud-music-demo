<template>
  <v-container>
    <v-card ripple class="mb-4 mx-2" style="height:240px">
      <v-img :src="coverImgUrl" :id="id" width="100%" height="10rem"> </v-img>
      <v-card-title class="headline ma-0 pa-0 mt-3 px-2">
        {{ name }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    coverImgUrl: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>

<style></style>
