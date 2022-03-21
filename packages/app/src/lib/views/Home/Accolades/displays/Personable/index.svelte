<script>
  import video_meeting_src from '$lib/assets/static/photos/video_meeting.jpg'
</script>

<div class="container">
	<div class="bg" />
	<div class="icon">
		<img src={video_meeting_src} alt="quickbooks_cert" height="60" width="auto" class="imgsty" />
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		width: 14rem;
		height: 14rem;
	}
	.bg {
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: var(--primary);
		border-radius: 9rem;
	}
	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		height: 60px;
		aspect-ratio: 1.7;
		border-radius: 2rem;
		overflow: hidden;
	}
	.imgsty {
		object-fit: contain;
	}
</style>
