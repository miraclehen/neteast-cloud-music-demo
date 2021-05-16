<template>
  <v-col
    cols="12"
    :key="id"
    v-ripple
    class="pa-0 my-1"
    @click.stop="$emit('setMusic', id)"
    v-if="index < maxItem"
  >
    <v-card color="secondary" class="my-0" cursor-pointer card-hover>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-column align-start justify-center">
          <div class="subtitle-1 ml-4">
            {{ name }}
          </div>
          <div class="ma-1 caption text-truncate ml-4 text--secondary">
            {{ artist }}
          </div>
        </div>
        <div>
          <v-avatar size="92" tile>
            <v-img :src="httpToHttps(imgUrl) + '?param=100y100'"></v-img>
          </v-avatar>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { mdiPlaylistPlus } from '@mdi/js'
import { httpToHttps } from '../../utils/helper'
export default {
  data: () => {
    return {
      mdiPlaylistPlus,
      httpToHttps
    }
  },
  props: {
    id: Number,
    name: String,
    artist: String,
    imgUrl: String,
    index: { type: Number, default: 0 },
    maxItem: {
      type: Number,
      default: 9999
    }
  }
}
</script>

<style lang="scss" scoped>
.card-hover {
  transition: 0.1s ease-in-out;
}
.card-hover:hover {
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.2);
}
</style>
