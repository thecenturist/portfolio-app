<template>
    <div class="projects grid slide delay02">
        <a href="#" class="work-item">
            <div class="work-item-image">
                <img src="../assets/images/notetaker.webp">
            </div>
            <div class="work-item-info">
                <div class="work-item-company">Note-Taker</div>
                <div class="work-item-description">Note taking App</div>
            </div>
        </a>
        <a href="#" class="work-item">
            <div class="work-item-image">
                <img src="../assets/images/ss2ool.webp">
            </div>
            <div class="work-item-info">
                <div class="work-item-company">SSL2ooL</div>
                <div class="work-item-description">SSL Task Automation App</div>
            </div>
        </a>
        <a href="#" class="work-item">
            <div class="work-item-image">
                <img src="../assets/images/anjolawork.webp">
            </div>
            <div class="work-item-info">
                <div class="work-item-company">Anjola.Work</div>
                <div class="work-item-description">This very site you're on</div>
            </div>
        </a>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.projects a {
    text-decoration: none;
}
.grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between; 
	max-width: 1200px;
	margin: 0 auto;
}

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