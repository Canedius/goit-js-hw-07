import { galleryItems } from "./gallery-items.js";

const gallaryEl = document.querySelector(".gallery");
const create = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
);

gallaryEl.insertAdjacentHTML("afterbegin", create.join(""));
gallaryEl.addEventListener("click", openOriginImages);

function openOriginImages(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");

  if (!isGalleryImage) {
    return;
  }
  const href = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${href}">`);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
