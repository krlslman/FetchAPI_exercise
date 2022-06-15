
///////GET//////////////
const updateDom = (data) => {
    const display = document.querySelector('.display');
    data.forEach(user => {
        const {name, title} = user;
        display.innerHTML += `
        <p>${name}</p>
        <p>${title}</p>
        `
    });

}

/// GET  : varsa getir
fetch("http://localhost:3000/projects")
.then((res) => res.json()
.then((data) => console.log(data)))
.catch((err) => console.log(err));
// .catch(() => new Error("sth went wrong"));



/// POST : yoksa ekle
fetch("http://localhost:3000/projects", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		"id":4,
		"projectID": 543,
		"description": "POST method"
	})
})
.then((res) => res.json()
.then((data) => console.log(data)))
.catch((err) => console.log(err));



/// PUT :  güncelle (url'de projects'ten sonra neyi update edeceğimizin id'sini belirtiyoruz)
fetch("http://localhost:3000/projects/1", {
	method: "PUT",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		// "id":1,
		"projectID": 100,
		"description": "fetchApi put method"
	})
})
.then((res) => res.json()
.then((data) => console.log(data)))
.catch((err) => console.log(err));

/// DELETE  : sil (yukarıda olduğu gibi, url'de id yi belirtiyoruz)
fetch("http://localhost:3000/projects/2", {
	method: "DELETE",
	
})
.then((res) => res.json()
.then((data) => console.log(data)))
.catch((err) => console.log(err));

