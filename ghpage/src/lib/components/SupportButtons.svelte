<script>
	export let buttons = [
		{ type: 'github', icon: 'fa-brands fa-github', text: 'GitHub', href: 'https://github.com/nastechai/nasbeat' },
		{ type: 'website', icon: 'fa-solid fa-globe', text: 'Website', href: 'https://nasbeat.nastechai.com' },
	];

	export let highlighted = false;
</script>

<div class="support-container" class:highlighted>
	<h3>Buy me a coffee 🍵</h3>
	<div class="support-buttons">
		{#each buttons as button}
			<a href={button.href} class="support-btn {button.type}" target="_blank" rel="noopener noreferrer">
				{#if button.customIcon}
					<img src={button.customIcon} alt="{button.text} icon" class="btn-icon">
				{:else}
					<i class="{button.icon} btn-icon"></i>
				{/if}
				<span class="btn-text">{button.text}</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.support-container h3 { 
		font-size: 1.2rem;
		font-family: 'Borel', sans-serif; 
		font-weight: 500; 
		color: #ffffff; 
		margin-bottom: 1rem; 
	}
	
	.support-buttons { 
		display: flex; 
		gap: 0.8rem;
		flex-wrap: wrap;
	}
	
	.support-btn { 
		/* Use inline-flex for better alignment and wrapping */
		display: inline-flex; 
		align-items: center; 
		justify-content: center; 
		gap: 0.6rem; 
		padding: 0.7rem 1.4rem; 
		border-radius: 12px; 
		text-decoration: none; 
		font-weight: 500; 
		font-size: 0.9rem;
		transition: all 0.3s ease; 
		position: relative;
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		/* Normalize line-height to prevent text from adding extra vertical space */
		line-height: 1;
	}
	
	.support-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}
	
	/* --- Main Fix: Unified Icon Styling for Perfect Alignment --- */
	.btn-icon {
		/* Set a fixed size for the icon container */
		width: 20px;
		height: 20px;
		/* Use flexbox to center the icon glyph/image within its own container */
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	/* Ensure Font Awesome icons fit neatly inside their container */
	.btn-icon.fa-solid, .btn-icon.fa-brands {
		font-size: 18px; 
	}

	.btn-text {
		/* This class ensures the text is treated as a distinct element from the icon */
		display: inline-block;
	}
	
	/* --- Button Color Styles --- */
	.support-btn.github {
		background: #111827;
		border: 1px solid rgba(95, 131, 238, 0.7);
		color: white;
	}
	
	.support-btn.website {
		background: rgba(12, 74, 110, 0.95);
		border: 1px solid rgba(56, 189, 248, 0.7);
		color: white;
	}
	
	/* --- Highlighted State Styles (Unchanged) --- */
	.support-container.highlighted {
		animation: none;
	}
	
	.support-container.highlighted .support-btn.github {
		background: rgb(31, 41, 55);
		border-color: rgb(75, 85, 99);
		box-shadow:
			0 3px 12px rgba(17, 24, 39, 0.4),
			0 0 20px rgba(17, 24, 39, 0.3);
		animation: softBlink 1s ease-in-out 3;
	}
	
	.support-container.highlighted .support-btn.website {
		background: rgba(8, 47, 73, 1);
		border-color: rgba(14, 165, 233, 1);
		box-shadow:
			0 3px 12px rgba(14, 165, 233, 0.4),
			0 0 20px rgba(14, 165, 233, 0.3);
		animation: softBlink 1s ease-in-out 3;
	}
	
	.support-container.highlighted .support-btn:hover {
		transform: translateY(-2px);
	}
	
	.support-container.highlighted h3 {
		color: #ffffff;
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
	}
	
	@keyframes softBlink {
		0%, 100% { filter: brightness(1); transform: scale(1); }
		50% { filter: brightness(1.1); transform: scale(1.02); }
	}

	/* --- Responsive Styles (Unchanged) --- */
	@media (max-width: 992px) {
		.support-container { 
			margin-top: 1.5rem;
		}
		
		.support-container h3 {
			text-align: center;
			margin-bottom: 1rem;
		}
		
		.support-buttons { 
			flex-direction: column; 
			gap: 0.8rem; 
			align-items: stretch;
		}
		
		.support-btn { 
			padding: 0.6rem 1.2rem; 
			font-size: 0.85rem;
			text-align: center;
			border-radius: 8px;
		}
	}
</style>
