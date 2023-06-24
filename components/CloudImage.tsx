import React from "react";
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
const CloudImage = ({ image_public_id, isThum }: { image_public_id: string; isThum: boolean }) => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deb6ctgzv",
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image(image_public_id);
  // myImage
  //   .resize(thumbnail().width(150).height(100).gravity(focusOn(FocusOn.face()))) // Crop the image, focusing on the face.
  //   .roundCorners(byRadius(20)); // Round the corners.
  myImage.format("auto").quality("auto");

  if (isThum) {
    myImage.resize(thumbnail().width(150).height(100));
  }

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return <AdvancedImage cldImg={myImage} plugins={isThum && [lazyload()]} />;
};

export default CloudImage;
