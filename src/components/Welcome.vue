<template>
	<b-jumbotron id="welcome-section">
		<b-container>
			<!-- Opening Text -->
			<h1 
				id="opening-text" 
				class="load-hidden" 
				v-scroll-reveal.reset="{ distance: '30px', duration: 1000, delay: 500, origin: leftToBottom }"
			>
				Hi, my name is <span class="text-color-main">John Doe</span>
				<span class="block">I'm the Unknown Developer.</span>
			</h1>
			<!-- /END Opening Text -->

			<!-- Opening Call To Action -->
			<p 
				id="opening-paragraph" 
				class="load-hidden"
				v-scroll-reveal.reset="{ distance: '30px', duration: 1000, delay: 1000, origin: leftToBottom }"
			>
				<a class="cta-btn cta-btn--hero" href="#about">Know more</a> <!-- {{jumpscroll}} -->
			</p>
		</b-container>
	</b-jumbotron>
</template>

<script>
export default {
	computed: {
		leftToBottom() {
			return this.$mq.isDesktop ? 'bottom' : 'left';
		},
		rightToBottom() {
			return this.$mq.isDesktop ? 'bottom' : 'right';
		}
	}
}
</script>