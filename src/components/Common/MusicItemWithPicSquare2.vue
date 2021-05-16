<template>
  <v-card
    height="100%"
    @click.stop="$emit('setMusic', id)"
    flat
    class="ma-0 cursor-pointer card-hover"
  >
    <div>
      <v-img
        lazy-src="../../assets/default_cover.png"
        min-height="120"
        :src="httpToHttps(imgUrl) + '?param=100y100'"
      >
      </v-img>

      <div class="mt-2 body-2 text-truncate text-center">
        {{ name }}
      </div>

      <div
        class="caption text-truncate text--secondary text-center"
        style="max-width: 170px"
      >
        {{ artist }}
      </div>
    </div>
  </v-card>
</template>

<script>
import { httpToHttps } from '../../utils/helper'
export default {
  data() {
    return {
      httpToHttps
    }
  },
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    artist: {
      type: String
    },
    imgUrl: {
      type: String
    },
    index: {
      type: Number,
      default: 0
    },
    maxItem: {
      type: Number,
      default: 999
    }
  }
}
</script>

<style>
.card-hover {
  transition: 0.15 ease-in-out;
}
.card-hover:hover {
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.2);
  background-color: red;
}
</style>
