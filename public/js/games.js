document.getElementById("loadItems").addEventListener("click", async () => {
  try {
    const res = await fetch("/api/games");
    const items = await res.json();

    const itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.innerHTML = "";

    items.map((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.innerHTML = `
          <h2>${item.name}</h2>
          <p>Genre: ${item.genre}</p>
          <p>Release Year: ${item.releaseYear}</p>
          <p>Platform: ${item.platform}</p>
        `;
      itemsContainer.appendChild(itemDiv);
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
});
