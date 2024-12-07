# Slides.com Print PDF

[Slides.com Companion](https://github.com/leicaflorian/slides_com_companion) doesn't seem to be working anymore.

However, this can still be achieved by the following:

1. Add `?print-pdf` to the end of your URL (without a slash before the questions mark).
2. Wait for the webpage to load.
3. Paste the following in your console:

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
4. Wait for the webpage to load. Manually scroll to the bottom to load every embedded assets.
5. Right-click and Print. Set `Destination: Save as PDF`, `Margins: None`, and then save to file.
