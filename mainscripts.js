const listOfSounds =
[
	"a",
	"b",
	"c",
];

function populatelist()
{
	var list = document.getElementById("soundList");
	var i;
	listOfSounds.forEach(function(item) {
	  const listItem = document.createElement("li");
	  listItem.textContent = item;
	  list.appendChild(listItem);
	});
}