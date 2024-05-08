"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor as CEditor } from "ckeditor5-custom-build";

const editorConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "style",
      "|",
      "insertTable",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "alignment",
      "bulletedList",
      "numberedList",
      "subscript",
      "superscript",
      "|",
      "fontBackgroundColor",
      "fontColor",
      "fontFamily",
      "fontSize",
      "|",
      "outdent",
      "indent",
      "|",
      "code",
      "codeBlock",
      "blockQuote",
      "pageBreak",
      "|",
      "link",
      "imageInsert",
      "mediaEmbed",
      "undo",
      "redo",
      "findAndReplace",
      "sourceEditing",
      "specialCharacters",
    ],
  },
  language: "en-gb",
  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  ckfinder: { uploadUrl: "/api/upload" },
};

const Editor = () => {
  return (
    <CKEditor
      key="editor"
      type="textarea"
      editor={CEditor}
      data="<p>Hello from CKEditor 5!</p>"
      config={editorConfig}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
};

export default Editor;
