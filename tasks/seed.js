import { dbConnection, closeConnection } from "../config/mongoConnection.js";
import { perfumes } from "../config/mongoCollections.js";
import { ObjectId } from "mongodb";

const main = async () => {
  await dbConnection();
  const perfumesCollection = await perfumes();

  const perfumeData = [
    {
      _id: new ObjectId(),
      name: "Velvet Bloom",
      brand: "Maison Noir",
      description: "A soft floral fragrance with rose and vanilla notes.",
      imgs: ["/velvetbloom.jpg"],
      price: 89.99,
      stock: 12,
    },
    {
      _id: new ObjectId(),
      name: "Midnight Oud",
      brand: "Saffron House",
      description: "A warm woody perfume with oud, amber, and spice accents.",
      imgs: ["/midnightoud.jpg"],
      price: 124.5,
      stock: 8,
    },
    {
      _id: new ObjectId(),
      name: "Citrus Muse",
      brand: "Luna Atelier",
      description: "A bright citrus scent with neroli and neroli blossom.",
      imgs: ["/citrusmuse.webp"],
      price: 64.0,
      stock: 15,
    },
    {
      _id: new ObjectId(),
      name: "Golden Sands",
      brand: "Coastal Essence",
      description: "A beach-inspired blend of amber, musk, and coconut.",
      imgs: ["/goldensands.webp"],
      price: 72.25,
      stock: 10,
    },
    {
      _id: new ObjectId(),
      name: "Rose Mirage",
      brand: "Veloura",
      description: "A romantic rose perfume with soft musk and peony.",
      imgs: ["/rosemirage.webp"],
      price: 95.0,
      stock: 7,
    },
  ];

  await perfumesCollection.insertMany(perfumeData);
  console.log("Seeded perfume data");
  await closeConnection();
};

main();
