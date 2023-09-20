<template>
  <button
    :class="[
      'my-button',
      {
        'link-button': isLink,
        'action-button': isAction,
        'video-button': isVideo,
        'special-style': specialStyle,
        'regular-style': regularStyle,
      },
    ]"
    @click="handleClick"
    v-if="isVisible"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    link: String, // Href navigation link
    action: Function, // Action function
    video: String, // Video link
    specialStyle: Boolean, // Whether to apply special styles
    regularStyle: Boolean, // Whether to apply regular styles
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
  // Common button styles
}

.link-button {
  // Styles for navigation link button
}

.action-button {
  // Styles for action button
}

.video-button {
  // Styles for video link button
}

.special-style {
  // Special styles to be applied conditionally
}

.regular-style {
  // Regular styles to be applied conditionally
}
</style>
