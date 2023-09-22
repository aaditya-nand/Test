// The product data as given is defined below :-
const products = [
    { name: "Vitamin C Serum", category: "Glow", mrp: 1095, rating: 4.3 },
    { name: "Pink Clay Mask", category: "Glow", mrp: 845, rating: 4.7 },
    { name: "Day Cream", category: "Dry", mrp: 845, rating: 4.1 },
    { name: "Night Cream", category: "Dry", mrp: 945, rating: 4.7 },
    { name: "Hyaluronic Acid Serum", category: "Dry", mrp: 975, rating: 4.9 },
    { name: "Acne Busting Serum", category: "Acne", mrp: 975, rating: 4.6 },
    { name: "Green Clay Mask", category: "Acne", mrp: 695, rating: 4.7 },
    { name: "Day Gel", category: "Dry", mrp: 645, rating: 4.9 },
    { name: "AHA Serum", category: "Glow", mrp: 1095, rating: 4.5 },
    { name: "AHA Sleep Mask", category: "Glow", mrp: 995, rating: 4.3 },
  ];
  
  // Below is the function that will recommend a product based upon the recommendation logic
  function recommendProduct(inputProductName, inputRating) {
    console.log("Sent Input Poduct : " + inputProductName + ", Input Rating : " + inputRating);
    const inputProduct = products.find((product) => product.name === inputProductName);
  
    if (!inputProduct) {
      return "Product not found";
    }
  
    if (inputRating > 4.5) {
        let returnProduct;
        // filtering out products with rating highher than 4.3 and sorting from highest to lowest rating
        let recommendedProducts = products.filter((product) => product.rating > 4.3 && product.name !== inputProductName).sort((a, b) => b.rating - a.rating);
        if (recommendedProducts.length > 0) {
            let highestRating = recommendedProducts[0].rating;
            recommendedProducts = recommendedProducts.filter((product) => product.rating === highestRating);

            // checking if more than one products have the highest rating
            if(recommendedProducts.length > 0) {
                let rProduct = recommendedProducts.filter((product) => product.category === inputProduct.category)

                // checking if there more than one products in the same category
                if(rProduct.length > 0) {
                    returnProduct = rProduct[0];  // Sending the first product as no additional conditions were mentioned
                }
                // if there are no products from the same category sending the most expensive product
                else{
                
                    let mostExpensiveProduct = recommendedProducts.sort((a,b) => b.mrp-a.mrp);
                    returnProduct = mostExpensiveProduct[0];
                }
            }
            
            return returnProduct.name;
        }
    } else if (inputRating >= 4.0 && inputRating <= 4.5) {
        let returnProduct;
        // filtering out products with rating highher than 4.5 and sorting from highest to lowest rating
        let recommendedProducts = products.filter((product) => product.rating > 4.5 && product.name !== inputProductName).sort((a, b) => b.rating - a.rating);
        if (recommendedProducts.length > 0) {
            let highestRating = recommendedProducts[0].rating;
            recommendedProducts = recommendedProducts.filter((product) => product.rating === highestRating);

            // checking if more than one products have the highest rating
            if(recommendedProducts.length > 0) {
                let rProduct = recommendedProducts.filter((product) => product.category === inputProduct.category)

                // checking if there more than one products in the same category
                if(rProduct.length > 0) {
                    returnProduct = rProduct[0];
                }
                // if there are no products from the same category sending the most expensive product
                else{
                    let mostExpensiveProduct = recommendedProducts.sort((a,b) => b.mrp-a.mrp);
                    returnProduct = mostExpensiveProduct[0];
                }
            }
            
            return returnProduct.name;
        }
    } else if (inputRating < 4.0){
        let returnProduct;
        // filtering out products which are not in the same category as the input product and sorting from highest to lowest rating
        let recommendedProducts = products.filter((product) => product.category != inputProduct.category && product.name !== inputProductName).sort((a, b) => b.rating - a.rating);
        
        if (recommendedProducts.length > 0) {
            let highestRating = recommendedProducts[0].rating;
            recommendedProducts = recommendedProducts.filter((product) => product.rating === highestRating);

            // checking if more than one products have the highest rating
            if(recommendedProducts.length > 0) {
                // sending the least expensive product
                let leastExpensiveProduct = recommendedProducts.sort((a,b) => a.mrp-b.mrp);
                returnProduct = leastExpensiveProduct[0];
            }
        }
        return returnProduct.name;
    }
    return("No product found as per the conditions.");
  }
  
  // Test case 1
  console.log("Recommended Product as per the conditions : " + recommendProduct("Day Cream", 4.7));
  
  // Test case 2
  console.log("Recommended Product as per the conditions : " + recommendProduct("Day Cream", 4.3));
  
  // Test case 3
  console.log("Recommended Product as per the conditions : " + recommendProduct("Night Cream", 3.5));