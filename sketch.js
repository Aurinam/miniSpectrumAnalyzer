//magnitude spectrum canvas 

//scaling parameters
let varScale = 80;	//apm inc
let horizScale = 1;	//expands

function magnitude_spectra(p){
	p.setup = function () {
		p.createCanvas(1800, 900);
		p.background(240);
		p.translate(900, 850);	//move origine
		p.scale(1, -1); 	//invert Y-axis (to match conventional Cartesion coordinate system)

		fetch('/data')
			.then((response)=>{
				return response.json();
			})
			.then((pts) => {
				//draw lines joining points
				p.stroke('blue');  
				p.strokeWeight(1);
				p.fill(50, 100, 200);
				let sizePt = pts.length;
				let prevPt = pts[0]['mag'] * varScale;
				let x = (1 - sizePt/2)*horizScale 
				for (let i = 1; i < sizePt; i++) {
					let pt = pts[i]['mag'] * varScale;
					p.line(x-1, prevPt, x, pt);
					prevPt = pt;
					x+=(horizScale);
				} 
			})


		//draw X & Y asis
		p.stroke('green');  
		p.strokeWeight(2);
		p.fill(50, 100, 200);
		p.line(-900, 0, 900, 0);	//X-axis
		p.stroke('red');  
		p.line(0, 850, 0, -50);	//Y-axis

		p.push();
		p.textAlign(p.CENTER, p.CENTER);
		p.stroke(100);
		p.strokeWeight(1);
		p.noFill();
		p.scale(1, -1); 	//reinvert Y-axis to render texts rightly 

		// Draw ticks and labels on x-axis
		for (let x = -900; x <= 900; x += 50) {
			p.line(x, - 5, x, 5);  // Ticks
			if (x !== 0) {
				p.text(x, x, 20);  // Labels
			}
		}

		// Draw ticks and labels on y-axis
		for (let y = -850; y <= 200; y += 200) {
			p.line(-5, y, 5, y);  // Ticks
			if (y !== 0) {
				p.text(y, -20, y);  // Labels
			}
		}

		// Draw the origin label
		p.textAlign(p.CENTER, p.CENTER);
		p.text("0", 15, 15);

		//title
		p.text("Magnitude Spectrum", -800, -800);

		p.pop();
	}
}
new p5(magnitude_spectra);


//phase spectram canvas

//scaling parameters
let varScale_ph = 30;	//apm inc
let horizScale_ph = 1;	//expands
let vartOffset_ph = 0;  //clamps

function phase_spectra(p){
	p.setup = function () {
		p.createCanvas(1800, 900);
		p.background(240);
		p.translate(900, 850);	//move origine
		p.scale(1, -1); 	//invert Y-axis (to match conventional Cartesion coordinate system)

		fetch('/data')
			.then((response)=>{
				return response.json();
			})
			.then((pts) => {
				//draw lines joining points
				p.stroke('blue');  
				p.strokeWeight(1);
				p.fill(50, 100, 200);
				let sizePt = pts.length;
				let prevPt = vartOffset_ph + pts[0]['ang'] * varScale_ph;
				let x = 1 -(sizePt/2)*horizScale_ph; 
				for (let i = 1; i < sizePt; i++) {
					let pt = vartOffset_ph + pts[i]['ang'] * varScale_ph;
					p.line(x-1, prevPt, x, pt);
					//p.line(prevPt, x-1, pt, x);
					prevPt = pt;
					x+=(horizScale_ph);
				}
			})

		//draw X & Y asis
		p.stroke('green');  
		p.strokeWeight(2);
		p.fill(50, 100, 200);
		p.line(-900, 0, 900, 0);	//X-axis
		p.stroke('red');  
		p.line(0, 850, 0, -50);	//Y-axis

		p.push();
		p.textAlign(p.CENTER, p.CENTER);
		p.stroke(100);
		p.strokeWeight(1);
		p.noFill();
		p.scale(1, -1); 	//reinvert Y-axis to render texts rightly 

		// Draw ticks and labels on x-axis
		for (let x = -900; x <= 900; x += 50) {
			p.line(x, - 5, x, 5);  // Ticks
			if (x !== 0) {
				p.text(x, x, 20);  // Labels
			}
		}

		// Draw ticks and labels on y-axis
		for (let y = -850; y <= 200; y += 200) {
			p.line(-5, y, 5, y);  // Ticks
			if (y !== 0) {
				p.text(y, -20, y);  // Labels
			}
		}

		// Draw the origin label
		p.textAlign(p.CENTER, p.CENTER);
		p.text("0", 15, 15);

		//title
		p.text("Phase Spectrum", -800, -800);

		p.pop();
	}
}
new p5(phase_spectra);
console.log("hello");
