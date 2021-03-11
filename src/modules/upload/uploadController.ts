import express from "express";
import { promisify } from "util";
import axios, { AxiosRequestConfig } from "axios";
import fs from "fs";
import { Pet } from "../pet";

const fsUnLinkAsync = promisify(fs.unlink);
const uploadDir = `/Users/ifontalvo/projects/personal/that-pet/that-pet-ml-recognition/pictures`;

export async function upload(req: express.Request, res: express.Response) {
  if (!req.files || !Object.keys(req.files).length) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.filename as any;
  const uploadMLPath = `${uploadDir}/${file.name}`;
  const uploadPreviewPath = `/Users/ifontalvo/projects/personal/that-pet/that-pet-api/public/images/${file.name}`;

  const mvFileAsync = promisify(file.mv);

  try {
    // await fsUnLinkAsync(uploadPath);
    await mvFileAsync(uploadMLPath);
    await mvFileAsync(uploadPreviewPath);

    const payload = {
      filename: file.name,
    };
    const axiosRequest: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const prediction = await axios.post(
      "http://localhost:5000/api/recognition",
      payload,
      axiosRequest
    );

    const imageAccess = `http://localhost:8080/static/images/${file.name}`;
    const { label } = prediction.data;

    const pet = await (
      await Pet.findOne({ key: label }, "_id name key").exec()
    ).toJSON();

    return res.send({
      ...pet,
      image: imageAccess,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
}
