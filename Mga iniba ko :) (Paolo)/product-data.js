const products = [
  // MEN
  { id: 1, name: "Navy Blue Rectangular Shaped Glasses", price: "₱899.00", desc: "Elevate your everyday style with our classic rectangular eyeglasses, featuring a subtle blue accent for a modern wish.", image: "images/men glasses 1.png", category: "Men", stock: 10 },
  { id: 2, name: "Muddy Blue Hexagonal Shaped Glasses", price: "₱999.00", desc: "Unique hexagonal design with a muddy blue tone, ideal for adding a touch of style.", image: "images/men glasses 2.png", category: "Men", stock: 10 },
  { id: 3, name: "Grey Metal Frames", price: "₱1299.00", desc: "Simple but lightweight grey metal frame for a clean, minimalist.", image: "images/men glasses 3.png", category: "Men", stock: 10 },
  { id: 4, name: "Gold Round Glasses", price: "₱1899.00", desc: "Classic round frame in elegant gold, giving a vintage yet fashionable vibe.", image: "images/men glasses 4.png", category: "Men", stock: 10 },
  { id: 5, name: "Black And Gold Rectangular Glasses", price: "₱1399.00", desc: "A bold mix of black and gold in a rectangular frame, combining elegance with strength.", image: "images/men glasses 5.png", category: "Men", stock: 10 },
  { id: 6, name: "Blue And Black Square Shaped Glasses", price: "₱1299.00", desc: "Trendy square frame with a cool blue and black color combo for a stylish edge.", image: "images/men glasses 6.png", category: "Men", stock: 10 },
  { id: 7, name: "Thin Black Metal Round Glasses", price: "₱1299.00", desc: "Lightweight thin black metal frame in a round shape, great for a classic and timeless look.", image: "images/men glasses 7.png", category: "Men", stock: 10 },
  
//women
{ id: 8, name: "Mahogany color slim oval-shaped glasses", price: "₱1299.00", desc: "Elegant and timeless, these slim oval glasses feature a rich mahogany tone that complements any look.", image: "images/women glasses 1.png", category: "Women", stock: 10 },
  { id: 9, name: "Light grey colored oval glasses", price: "₱999.00", desc: "A lightweight, versatile design in soft grey tones—perfect for daily wear and effortless sophistication.", image: "images/women glasses 2.png", category: "Women", stock: 10 },
  { id: 10, name: "Tiger Commando square glasses", price: "₱899.00", desc: "Bold and confident, these square glasses feature a tiger-pattern finish for a fierce and stylish edge.", image: "images/women glasses 3.png", category: "Women", stock: 10 },
  { id: 11, name: "Brown colored translucent frame", price: "₱1099.00", desc: "A translucent brown frame that blends subtlety and sophistication, perfect for a polished look.", image: "images/women glasses 4.png", category: "Women", stock: 10 },
  { id: 12, name: "Purple Colored Frameless Glasses", price: "₱1099.00", desc: "Light and airy, these frameless purple glasses add a soft pop of color to any outfit.", image: "images/women glasses 5.png", category: "Women", stock: 10 },
  { id: 13, name: "Bright Red Colored Oval Glasses", price: "₱1199.00", desc: "Make a bold statement with these bright red oval glasses that exude confidence and charm.", image: "images/women glasses 6.png", category: "Women", stock: 10 },
  { id: 14, name: "Tiger Print Oval Glasses", price: "₱699.00", desc: "Stylish tiger print oval glasses that bring a touch of wild fashion to your eyewear collection.", image: "images/women glasses 7.png", category: "Women", stock: 10 },
  { id: 15, name: "Leopard Print Round Glasses", price: "₱799.00", desc: "Trendy round glasses featuring a leopard print design—perfect for those who love standing out.", image: "images/women glasses 8.png", category: "Women", stock: 10 },

//kids
{ id: 16, name: "Silver Thin Metal Half Glasses", price: "₱1099.00", desc: "Classic half-rim design crafted from lightweight silver metal—ideal for a refined yet youthful style.", image: "images/kid glasses 1.png", category: "Kids", stock: 10 },
  { id: 17, name: "Rose Gold Thin Metal Rectangular Glasses", price: "₱1099.00", desc: "Delicate rose gold frames with a slim rectangular design for a sleek and stylish everyday look.", image: "images/kid glasses 2.png", category: "Kids", stock: 10 },
  { id: 18, name: "Black Colored Rectangular Frame", price: "₱899.00", desc: "A durable black rectangular frame that matches any outfit and adds a modern touch.", image: "images/kid glasses 3.png", category: "Kids", stock: 10 },
  { id: 19, name: "Scarlet Colored Rectangular Frame", price: "₱899.00", desc: "Vibrant scarlet-colored rectangular glasses designed to bring a pop of color and confidence.", image: "images/kid glasses 4.png", category: "Kids", stock: 10 },
  { id: 20, name: "Black Colored Thick Rectangular Frames With Tinted Lenses", price: "₱999.00", desc: "Bold thick black frames with tinted lenses for a stylish and protective eyewear choice.", image: "images/kid glasses 5.png", category: "Kids", stock: 10 },
  { id: 21, name: "Purple Colored Retangular Frame", price: "₱799.00", desc: "Fun purple rectangular frames offering a vibrant yet comfortable fit for kids.", image: "images/kid glasses 6.png", category: "Kids", stock: 10 },
  { id: 22, name: "Pink And Purple Colored Oval Frame", price: "₱999.00", desc: "Playful pink and purple oval frames that blend charm, color, and comfort for young wearers.", image: "images/kid glasses 7.png", category: "Kids", stock: 10 },

//unisex
{ id: 23, name: "Crystal Clear Glasses", price: "₱799.00", desc: "Minimalist and modern, these crystal-clear glasses pair perfectly with any outfit for a clean, timeless look.", image: "images/unisex glasses 1.png", category: "Unisex", stock: 10 },
  { id: 24, name: "Sleek Black Glasses", price: "₱999.00", desc: "A classic black frame with a sleek finish designed for both comfort and sophistication.", image: "images/unisex glasses 2.png", category: "Unisex", stock: 10 },
  { id: 25, name: "Thin Silver Colored Round Glasses", price: "₱1399.00", desc: "Lightweight silver frames with a thin, round design offering elegance and simplicity.", image: "images/unisex glasses 3.png", category: "Unisex", stock: 10 },
  { id: 26, name: "Gold Colored Round Glasses", price: "₱1799.00", desc: "Stylish gold round glasses that add a touch of luxury to any occasion.", image: "images/unisex glasses 4.png", category: "Unisex", stock: 10 },
  { id: 27, name: "Black Square Glasses", price: "₱699.00", desc: "Classic square black frames that provide a versatile, confident look for everyone.", image: "images/unisex glasses 5.png", category: "Unisex", stock: 10 },
  { id: 28, name: "Black Rectangular Glasses", price: "₱699.00", desc: "Sleek and professional rectangular black glasses perfect for daily wear.", image: "images/unisex glasses 6.png", category: "Unisex", stock: 10 },
  { id: 29, name: "Mahogany Colored Square Shaped Glasses", price: "₱899.00", desc: "Warm mahogany-colored square glasses that combine comfort and stylish flair.", image: "images/unisex glasses 7.png", category: "Unisex", stock: 10 },
  { id: 30, name: "Muted Green Colored Square Shaped Glasses", price: "₱799.00", desc: "Unique muted green square glasses offering a fresh, subtle look that suits any style.", image: "images/unisex glasses 8.png", category: "Unisex", stock: 10 }
];