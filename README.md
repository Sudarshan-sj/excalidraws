# Excalidraw

## Steps to Run this Project

- git clone this repo -  git clone https://github.com/Sudarshan-sj/excalidraws.git


- Go the client directory - cd client
- Install packages - yarn 

- Then go back to main directory - cd ..
- Go to server directory - cd server
- Install packages - npm install
- Go to main directory - cd ..
- Starting the server - npm start

- Then go to http://localhost:3000 to see the webpage
- To see the images saved in the server go to http://localhost:3000/savedimages
- Images can be saved to server by clicking the Save and Clear button in the Save As Image modal.


## Changes made to original project
- Added a nodejs server.
- Added a save and clear button in the client/src/components/ImageExportDialog.tsx which posts the image to server using api call.
- Added a All Images button to see all the images which is stored in the server.
