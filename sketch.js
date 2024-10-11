let varScale = 80;
let horizScale = 1;
function setup() {
	createCanvas(1800, 900);
	background(240);
	translate(900, 850); 
    scale(1, -1); 
	fetch('/data')
		.then((response)=>{
			return response.json();
		})
		.then((pts) => {
			stroke('blue');  
			strokeWeight(3);
			fill(50, 100, 200);
			let sizePt = pts.length;
			let prevPt = 50 + pts[0] * varScale;
			let x = 1 -(sizePt/2)*horizScale 
			for (let i = 1; i < sizePt; i++) {
				let pt = 50 + pts[i] * varScale;
				line(x-1, prevPt, x, pt);
				prevPt = pt;
				x+=(horizScale);
			}
		})
}


