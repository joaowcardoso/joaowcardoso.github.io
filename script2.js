
        document.getElementById('shop-btn').addEventListener('click', function() {
            window.location.href = 'shop/shop.html';  // Redirect to the Shop page
        });
                // Product Carousel JavaScript
                let currentImageIndex = 0;
                const carouselImages = [
                    "shop/images/Echeveria_Plant_fcyp-36.jpg", 
                    "shop/images/anemone-blubs-mix-blue-shades.jpg",
                    "shop/images/strawberry-plant-1.jpg",
                    "shop/images/lemon-tree.jpg",
                    "shop/images/blackcurrant-canes.jpg",
                    "shop/images/blueberry-plants.jpg",
                    "shop/images/lobelia-plant-starship-scarlet.jpg",
                    "shop/images/elstar-apple-tree.jpg",
                    "shop/images/olive-tree.jpg",
                    "shop/images/1872_lavender-seed.jpg",
                    "shop/images/Rudbeckia-plant.jpg",
                    "shop/images/heucheras.jpg",
                    "shop/images/set-of-hand-tools.jpg",
                    "shop/images/short-handled-garden-fork.jpg",
                    "shop/images/master-builder-spade.jpg",
                    "shop/images/hay-fork-2-prong.jpg",
                    "shop/images/metal-leaf-rake.jpg",
                    "shop/images/garden-wheelbarrow.jpg",
                    "shop/images/paving-brush.jpg",
                    "shop/images/hose-reel-with-stand.jpg"
                ];
        
                const carouselImageElement = document.getElementById('carousel-image');
        
                document.getElementById('next-btn').addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
                    carouselImageElement.src = carouselImages[currentImageIndex];
                });
        
                document.getElementById('prev-btn').addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
                    carouselImageElement.src = carouselImages[currentImageIndex];
                });
   