import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

type FileNameCallback = (error: Error | null, filename: string) => void;

export const multerConfig = {
  storage: multer.diskStorage({
    // diskStorage
    destination: "uploads/", // file 경로는 uploads
    filename: function (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) {
      cb(null, file.originalname); // 이름을 이런 식으로 저장할 것
    },
  }),
};
