<!DOCTYPE html>
<html>
<head>
	<title>button</title>
	<script src="https://unpkg.com/vue"></script>
</head>
<body>
	<template>
		<button class="didi-btn"
		:class="{
			'disable':disabled,
			'didi-btn-highlight':highlight
		}"
		@click="handleClick($event)"><slot></slot>
		></button>
	</template>
</body>
<script>
	export default{
		name:'dd-button',
		props:{
			disabled:Boolean,
			highlight:Boolean
		},
		methods:{
			handleClick:function(event){
				if(this.disabled){
					event.preventDefault()
					event.stopPropagation()
				}
			}
		}
	};
</script>

<style>

</style>
</html>