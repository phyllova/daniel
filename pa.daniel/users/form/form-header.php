<!DOCTYPE html>
<html lang="en">
<head>
	
	<?php require __core_views . '/head-tags.php'; ?>
	
	<style>
		.divider:after,
		.divider:before {
			content: "";
			flex: 1;
			height: 1px;
			background: #eee;
		}
		.h-custom {
			height: calc(100% - 73px);
		}
		@media (max-width: 450px) {
			.h-custom {
				height: 100%;
			}
		}
 
	</style>

	<script src='https://www.google.com/recaptcha/api.js'></script>
	
</head>
<body>

