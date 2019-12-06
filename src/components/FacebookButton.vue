<template>
<div>
    <!-- {{ imageUrl }} -->
  <div
    class="fb-share-button"
    :data-href="imageUrl"
    data-layout="button_count"
    data-size="small"
  >
    <a
      target="_blank"
      :href="'https://www.facebook.com/sharer/sharer.php?u='+ imageUrl +'&amp;src=sdkpreparse'"
      class="fb-xfbml-parse-ignore"
    >Bagikan</a>
  </div>
</div>
</template>

<script>
export default {
    name:"FacebookButton",
    props:['imageUrl']
};
</script>

<style>
</style>