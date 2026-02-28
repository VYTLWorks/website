<template>
	<section class="news-section">
		<div class="news-grid">
			<div v-for="news in sortedNewsItems" :key="news.title" class="news-card">
				<NewsListItem v-bind="news" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NewsItemProps, NewsPageProps } from "./news";
import NewsListItem from "./NewsListItem.vue";

const props = defineProps<NewsPageProps>();

const sortedNewsItems = computed<NewsItemProps[]>(() => {
	return props.items.sort((a, b) => {
		return (
			new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
		);
	});
});
</script>

<style scoped></style>
