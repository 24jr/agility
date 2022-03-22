<script>
  import video_meeting_src from '$lib/assets/static/photos/video_meeting.jpg'
</script>

<div class="container">
	<div class="frame">
		<img src={video_meeting_src} alt="quickbooks_cert" height="60" width="auto" class="imgsty" />
	</div>
</div>

<style>
	.container {
		display: flex;
		width: clamp(10rem, 20%, 14rem);
		height: minMax(18rem, 100%);
		background: var(--primary);
		border-radius: 2rem;
		justify-content: center;
		align-items: center;
	}
	.frame {
		height: 60px;
		aspect-ratio: 1.7;
		border-radius: 2rem;
		overflow: hidden;
	}
	.imgsty {
		object-fit: contain;
	}
</style>
