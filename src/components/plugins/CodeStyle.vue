<template>
  <div class="plugin-code-style">
    <pre>
      <code>
        {{code}}
      </code>
    </pre>
    <!-- <plugin-markdown-editor :editor="{value: code}"></plugin-markdown-editor> -->
  </div>
</template>

<script>
export default {
  name: 'plugin-code-style',
  props: {
    code: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
</style>
