<template>
    <a href="#" class="work-item">
        <div class="work-item-image">
            <img :src="require(`@/assets/images/${image}.webp`)">
        </div>
        <div class="work-item-info">
            <div class="work-item-company">{{ company }}</div>
            <div class="work-item-description">{{ description }}</div>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'
const props= defineProps({
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
</script>

<style scoped>
.work-item {
	width: calc(50% - 60px);
	margin-bottom: 100px;
	text-align: center;
	box-sizing: border-box;
    display: inline-block;
}

.work-item:nth-child(2n-2) {
	position: relative;
	top: 200px;
	top: 300px; /* CHANGE THIS for V2 */
}

.work-item-image {
	border-radius: 24px;
	overflow: hidden;
	height: 640px;	
	transition: all .8s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.work-item-image:hover {
	transform: scale(.95);
	transition: all .8s cubic-bezier(0.2, 0.6, 0.2, 1);
	cursor: pointer;
}

.work-item img {
	display: block;
	width: 100%;
	height: 100%;
 	object-fit: cover;
	transition: all .8s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.work-item:hover img {
	transform: scale(1.1);
	transition: all .8s cubic-bezier(0.2, 0.6, 0.2, 1);
	cursor: pointer;
}
.work-item-info {
	text-align: center;
	margin-top: 24px;
}

.work-item-company {
	color: var(--primary-body-color);
    font-family: 'Geist';
	font-weight: 500;
	font-size: 1.375rem;
	line-height: 160%;
	display: block;
	text-decoration: none;
}

.work-item-description {
	color: var(--secondary-text-color);
    font-family: 'Geist';
	font-weight: 300;
	font-size: 1.125rem;
	display: block;
	text-decoration: none;
}
@media screen and (max-width: 767px) {
	.grid {
		padding: 20px;
	}
	.work-item  {
	 	width: 100%;
		margin-bottom: 40px;
	}
	.work-item:nth-child(2n-2) {
		top: 0;
	}
	.work-item-image {
		height: 480px;
	}
	.work-item-info {
		margin-top: 12px;
	}
	.work-item-company {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.work-item-description {
		font-size: 1rem;
		font-weight: 400;
	}
}

</style>