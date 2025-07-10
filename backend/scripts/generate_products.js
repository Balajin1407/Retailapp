const fs = require('fs');

const brands = [
  "SoundMax", "TechGuru", "ElectroHome", "GadgetPro", "PixelWorks",
  "VoltEdge", "NanoTech", "FutureWave", "Smartify", "UltraGear"
];
const colors = [
  "Black", "White", "Silver", "Blue", "Red", "Green", "Yellow", "Purple", "Gray", "Gold"
];
const items = [
  "Wireless Headphones", "Bluetooth Speaker", "Smartphone", "Tablet", "Smartwatch",
  "Laptop", "Gaming Mouse", "Mechanical Keyboard", "4K Monitor", "VR Headset",
  "Portable SSD", "Action Camera", "Drone", "Fitness Tracker", "Smart TV",
  "Streaming Stick", "Bluetooth Earbuds", "Power Bank", "Digital Camera", "E-Reader"
];

const products = [];
for (let i = 1; i <= 100; i++) {
  const brand = brands[i % brands.length];
  const color = colors[i % colors.length];
  const item = items[i % items.length];
  const price = 50 + (i * 7) % 950;
  const stock = 100 + (i * 3) % 900;
  const ean = 9000000000000 + i;
  const idx = i;
  const name = `${brand} ${item} Model ${1000 + i}`;
  const shortDesc = `High-quality ${item.toLowerCase()} by ${brand}.`;
  const image = `electronics${i}.jpg`;
  const internalId = `elec-${i.toString().padStart(4, '0')}-uuid`;

  products.push({
    "Index": idx,
    "Name": name,
    "Description": `<div><p><strong>${name}</strong> is a top product in our <em>Electronics</em> category.</p><p>Price: <span style=\"color:green;\">$${price}</span> (USD)</p><p>Brand: ${brand}</p><p>Available in color: <span style=\"color:${color.toLowerCase()};\">${color}</span>, size: Standard</p><p>Stock status: in stock, ${stock} units left.</p><p>EAN: ${ean}</p></div>`,
    "Brand": brand,
    "Category": "Electronics",
    "Price": price,
    "Currency": "USD",
    "Stock": stock,
    "EAN": ean,
    "Color": color,
    "Size": "Standard",
    "Availability": "in_stock",
    "ShortDescription": shortDesc,
    "Image": image,
    "Internal ID": internalId
  });
}

fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
console.log('products.json with 100 different electronics items created!'); 