# Slides.com Print PDF

[Slides.com Companion](https://github.com/leicaflorian/slides_com_companion) doesn't seem to be working anymore.
However, this repo shows alternative ways to download the slides as a pdf:

## Automated Extension (Chromium based)

### Setup

1. Download the `SlidesDownloader` folder from the repo
2. Open the url [Chrome://extensions](Chrome://extensions)
3. Enable the 'Developer mode' toggle on the top right
4. Click on `Load unpacked` at the top left and select the folder you just downloaded

### How to use it

1. Open the slide deck in you browser
2. Open the extension and click through the buttons

Hint: In case that not all resources are downloaded, make sure to scroll through the preview before clicking download.

## Manual Steps (All Browsers)

1. Add `print-pdf` as a page parameter to the end of your URL:
    ```
    https://slides.com/person/title?token=_SYbhBEw → 
    https://slides.com/person/title?token=_SYbhBEw&print-pdf

    https://slides.com/person/title → 
    https://slides.com/person/title?print-pdf
    ```
2. Paste the following in your console:

   ```js
   // Find the div with class 'reveal'
   const revealDiv = document.querySelector('div.reveal');

   // Find the container with id 'container'
   const container = document.querySelector('div.container');

   // Move the 'reveal' div under the container
   if (revealDiv && container) {
       container.appendChild(revealDiv);
       console.log('Div moved successfully!');
   } else {
       console.error('Either the reveal div or container was not found.');
   }

   // Remove all child elements except the last one in 'container'
   if (container) {
       while (container.children.length > 1) {
           container.removeChild(container.firstElementChild);
       }
       console.log('All children except the last one in container have been removed.');
   } else {
       console.error('Container not found.');
   }

   // Remove all child elements except the first one in 'reveal'
   if (revealDiv) {
       while (revealDiv.children.length > 1) {
           revealDiv.removeChild(revealDiv.lastElementChild);
       }
       console.log('All children except the first one in "reveal" have been removed.');
   } else {
       console.error('Reveal div not found.');
   }
   ```
3. Wait for the webpage to load. Manually scroll to the bottom to load every embedded asset.
4. Right-click and Print. Set `Destination: Save as PDF`, `Margins: None`, and then save to file.

## Contributers

- [Johnson Sun](https://j3soon.github.io/) (j3soon)
- [Yves-Simon Zeulner](https://de.linkedin.com/in/yves-simon-zeulner-7a9b042a9) (ysz0507)

## References

- [PDF Export \| Reveal.js](https://revealjs.com/pdf-export/)

