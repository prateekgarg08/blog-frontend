import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor({ value, setValue }) {
  const editorRef = useRef(null);
  const log = () => {
    console.log("here");
    if (editorRef.current) {
      setValue(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        // apiKey={process.env.TINY_MCE_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={value}
        init={{
          // width: 500,
          // height: 450,
          resize: false,
          menubar: false,

          // plugins: [
          //   "advlist",
          //   "autolink",
          //   "lists",
          //   "link",
          //   "image",
          //   "charmap",
          //   "preview",
          //   "anchor",
          //   "searchreplace",
          //   "visualblocks",
          //   "code",
          //   "fullscreen",
          //   "insertdatetime",
          //   "media",
          //   "table",
          //   "code",
          //   "help",
          //   "wordcount",
          // ],
          // toolbar:
          //   "undo redo | blocks | " +
          //   "bold italic forecolor | alignleft aligncenter " +
          //   "alignright alignjustify | bullist numlist outdent indent | " +
          //   "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={log}
      />
    </>
  );
}
