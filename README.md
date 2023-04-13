# Etch-a-Sketch Project

## Key Learnings

- Beautiful buttons with 3D effects, inspired by [Josh Comeau's tutorial](https://www.joshwcomeau.com/animation/3d-button/)
- CSS transitions and animations, following [Josh Comeau's guide on CSS transitions](https://www.joshwcomeau.com/animation/css-transitions/)
- Styling color picker inputs using browser-specific pseudo-elements, as demonstrated in this [Coding Artist tutorial](https://codingartistweb.com/2021/09/styling-input-type-color-pure-css-tutorial/)
- I used CSS grid, not CSS flex like the tutorial recommended. Kevin, from Coding Tech, was instrumental in helping me out with this with [this video](https://www.youtube.com/watch?v=5GGhOJWlVfM&t=733s&ab_channel=CodingTech) explaining `grid-template-columns` and `grid-template-rows`. I initially built the grid with CSS before converting it to Javascript to make it dynamic with the slider.
- Learned how difficult tooltips are to make with vanilla Javascript. Finally gave up and used [TippyJS](https://github.com/atomiks/tippyjs).
- [Removing attributes](https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/)  

## Problems so large I will never forget

- [Color pickers are not buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color). It took me forever to realize this was the reason my button click event listener wasn't working on the color picker because, well, it isn't a button.
- [You need to add a `#` to your random color generators](https://gomakethings.com/a-better-way-to-generate-a-random-color-with-vanilla-js/). Math.floor() returns a string, so I simply needed to concatenate the hashtag to make sure that the generated color value is actually recognized *as a hex color.* I wanted to make Chrome's CSS parser really work for it...