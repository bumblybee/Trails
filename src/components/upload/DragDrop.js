import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorContext } from "../../context/error/ErrorContext";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import * as sc from "../../pages/scout_trail/StyledScoutForm";

const DragDrop = ({ setImage, preview, setPreview }) => {
  const { setError } = useContext(ErrorContext);

  const onDrop = useCallback(
    (files) => {
      let reader = new FileReader();

      if (files[0]) {
        reader.readAsDataURL(files[0]);
        setImage(files[0]);

        // TODO: v2 - look into loading photo to server before form submit (good for multiple pictures)
        reader.onloadend = () => {
          setPreview(reader.result);
        };
      }
    },
    [setImage, setPreview]
  );

  // TODO: check into useCallback for this
  const onDropRejected = (fileRejections) => {
    console.log(fileRejections);
    const error = fileRejections[0].errors[0];
    if (error.code === "file-too-large") {
      setError("File exceeds 5 MB limit.");
    } else {
      setError("Unauthorized file. Please choose a jpg or png file type.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: "image/jpeg, image/png, image/jpg",
    minSize: 0,
    maxSize: 5242880,
  });

  return (
    <sc.StyledDragDrop
      {...getRootProps()}
      isDragActive={isDragActive}
      onDropRejected={onDropRejected}
    >
      {/* TODO: add progress in v2 if hitting s3 on client side*/}

      <input {...getInputProps()} />
      {isDragActive ? (
        <>
          <FaCloudUploadAlt />
          <p>Drop file ...</p>{" "}
        </>
      ) : !preview ? (
        <>
          <FaCloudUploadAlt />
          <p>Drag 'n drop or click to choose photo (max 5MB)</p>
        </>
      ) : (
        <>
          <FaImage />
          <p>Drag 'n drop or click to choose a different photo</p>
        </>
      )}
    </sc.StyledDragDrop>
  );
};

export default DragDrop;
