
        
    
        document.addEventListener('DOMContentLoaded', function() {
            const imagePaths = [
                '../images/1.png',
                '../images/2.png',
                '../images/3.png',
                '../images/4.png',
                '../images/5.png',
                '../images/6.png',
                '../images/7.png',
                '../images/8.png',
                '../images/9.png'
            ];
        
            const updateRandomImage = () => {

                const randomIndex = Math.floor(Math.random() * imagePaths.length);
        
                const randomImagePath = imagePaths[randomIndex];
        
                const randomImageElement = document.getElementById('randomImage');
                randomImageElement.src = randomImagePath;
            };
        
            const refreshButton = document.getElementById('refreshButton');
            refreshButton.addEventListener('click', updateRandomImage);
        
            updateRandomImage();
        });