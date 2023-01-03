import fs from "fs";

export default async function handler(req, res) {
  try {
    const files = await fs.promises.readdir("./public/images");
    return res.status(200).json(files);
  } catch (error) {
    console.log(error);
    res.status(404).send("Error");
  }
}
