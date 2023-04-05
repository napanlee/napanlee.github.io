
const renderItems = (collection) => {
	const collectionList = document.getElementById('collection');
	

	collection.forEach(item => {
		const listItem = document.createElement('li')

		const itemTitle = document.createElement('h2') 
		itemTitle.innerHTML = item.title 
		listItem.appendChild(itemTitle) 

		const itemImage = document.createElement('img') 
		itemImage.src = item.images 
		listItem.appendChild(itemImage)
		listItem.id = item.id;
 
		const itemDetails =
			`
				<p>${item.number}</span></p>


			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) 



		collectionList.appendChild(listItem)
	})
}



fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		renderItems(collection) 
})