function applyFile(el){
	const beforeUploadEl = el.querySelector(".before");
	const afterUploadEl = el.querySelector(".after");
	const inputFile = el.querySelector("input");
	const imagePreview = el.querySelector(".after img");
	const clearBtn = el.querySelector(".after .clear-btn");
	
	function showImagePreview(img){
		if(img){
			const blobUrl = URL.createObjectURL(img);
			imagePreview.src = blobUrl;
			afterUploadEl.style.display = "block";
			beforeUploadEl.style.display = "none";
		}
	}
	
	beforeUploadEl.addEventListener("click", (e) => {
		e.preventDefault();
		inputFile.click();
	});
	
	inputFile.addEventListener("change", (e) => {
		e.preventDefault();
		showImagePreview(e.target.files[0]);
	});
	
	clearBtn.addEventListener("click", (e) => {
		afterUploadEl.style.display = "none";
		beforeUploadEl.style.display = "flex";
	});
	
	beforeUploadEl.addEventListener("dragover", (e) => {
		e.preventDefault();
		el.classList.add("active");
	});
	
	beforeUploadEl.addEventListener("dragleave", (e) => {
		e.preventDefault();
		el.classList.remove("active");
	});
	
	beforeUploadEl.addEventListener("drop", (e) => {
		e.preventDefault();
		el.classList.remove("active");
		showImagePreview(e.dataTransfer.files[0]);
	});
}

applyFile(document.querySelector(".file"));