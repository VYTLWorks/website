---
layout: home
---

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vitepress';
import { VP_BASE } from "../.vitepress/config.mjs";

const router = useRouter();

onMounted(() => {
  router.go('/website/en/');
});
</script>
