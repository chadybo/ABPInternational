import { perfumes } from "../config/mongoCollections.js";

export const getAllPerfumes = async () => {
  const perfumesCollection = await perfumes();

  let perfumeList = perfumesCollection.find({}).toArray();

  if (!perfumeList) return [];

  return perfumeList;
};
