import { galleryItems } from "./gallery-items.js";

const gallaryEl = document.querySelector(".gallery");
const create = galleryItems.map(
  ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
);
gallaryEl.insertAdjacentHTML("afterbegin", create.join(""));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
