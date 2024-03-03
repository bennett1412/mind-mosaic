import { useEffect, useRef } from "react";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useParams } from "react-router-dom";
import { db } from "@/db";
import { useDebounceValue } from "usehooks-ts";

function Editor({ content }: { content: string }) {
  const { id } = useParams();
  const [debouncedContentValue, setContentValue] = useDebounceValue(
    content,
    900
  );
  const ref = useRef(false);
  useEffect(() => {
    let flag = true;
    const write = () => {
      if (flag) {
        db.notes
          .update(Number(id), { content: debouncedContentValue })
          .then((updated) => {
            if (updated) {
              console.log("content updated");
            } else {
              console.log("content failed to update");
            }
          });
      }
    };
    if (ref.current && debouncedContentValue.length != 0) write();
    else ref.current = true;
    return () => {
      flag = false;
    };
  }, [debouncedContentValue, id]);
  const editor: BlockNoteEditor = useBlockNote({});

  useEffect(() => {
    const parseContent = async () => {
      try{
      console.log(content)
      const parsedContent = JSON.parse(content);
      console.log(parsedContent);
      if (parsedContent.length != 0) {
        editor.insertBlocks(parsedContent, editor.topLevelBlocks[0].id);
      }
    } catch(error){
      console.log(error)
      console.log("Incorrect json structure");
    }
    }
    if(content.length != 0)
      parseContent();
  }, [content, editor]);

  editor.onEditorContentChange(() => {
    const blocks = editor.topLevelBlocks;
    console.log("Content was changed", blocks);

    setContentValue(JSON.stringify(editor.topLevelBlocks));
  });

  return <BlockNoteView editor={editor} theme={"light"} />;
}

export default Editor;
