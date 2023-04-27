import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

// Configuration
cloudinary.config({
  cloud_name: "de6naopzg",
  api_key: "558991472317614",
  api_secret: "Oa00r5BdjksJbv31CRvD_eaMTaY",
});

// Upload

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "mernapp"
  });
};

export const deleteImage = async (public_id) => {
    cloudinary.uploader.destroy(public_id)
}
