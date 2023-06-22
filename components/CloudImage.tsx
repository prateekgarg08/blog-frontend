import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const CloudImage = ({ image_public_id }) => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deb6ctgzv",
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image(image_public_id);

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return <AdvancedImage cldImg={myImage} />;
};

export default CloudImage;
