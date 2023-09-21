<template>
  <button
    :class="[
      'my-button',
      {
        'link-button': isLink,
        'action-button': isAction,
        'video-button': isVideo,
      },
    ]"
    @click="handleClick"
    v-if="isVisible"
  >

      <a
        v-if="isLink"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ text }}
      </a>
      <span v-else>
        {{ text }}
      </span>
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    action: Function,
    video: String,
  },

  computed: {
    isLink() {
      return !!this.link;
    },
    isAction() {
      return typeof this.action === 'function';
    },
    isVideo() {
      return !!this.video;
    },
    isVisible() {
      return this.isLink || this.isAction || this.isVideo;
    },
  },

  methods: {
    handleClick() {
      if (this.isLink) {
        // Handle navigation link
        window.location.href = this.link;
      } else if (this.isAction) {
        // Handle action function
        this.action();
      } else if (this.isVideo) {
        // Handle video link
        window.location.href = this.video;
      }
    },
  },
};
</script>

<style scoped>

.my-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 980px;
  background: var(--Blue-Primary-Color);
}

.link-button {
  padding: 18px 32px;
  color: #FFF;
  text-align: center;
  font-family: 'Raleway';
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.374px;
}

.action-button {
  width: 255px;
  padding: 16px 40px;
  color: #FFF;
  text-align: center;
  font-family: 'Railway';
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 32px;
}

.video-button {
  padding: 4px 24px 4px 4px;
  gap: 8px;
  border-radius: 45px;
}

</style>
