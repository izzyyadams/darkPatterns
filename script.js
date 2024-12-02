document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".mainTitle", { 
    	opacity: 0, 
    	duration: 1, 
    	y: -50 });
    gsap.from(".darkPattern", { 
    	opacity: 0, 
    	duration: 1, 
    	stagger: 0.5 });
    gsap.fromTo(".mainTitle", 
  		{ rotation: -5 }, 
  		{ rotation: 5, duration: 0.1, repeat: 5, yoyo: true }
);


    



    
});


