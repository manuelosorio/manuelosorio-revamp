	@mixin wrapper-edges-color($color: black) {
		&:before, &:after {
			background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="0,100 100,0 100,100" style="fill:#{$color};" /></svg>');
		}
	}