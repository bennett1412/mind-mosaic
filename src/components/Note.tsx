import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import Editor from "@/components/Editor";
import { useDebounceValue } from "usehooks-ts";
import { useParams } from "react-router-dom";
import { db } from "@/db";
const Note = () => {
  const [debouncedTitleValue, setTitleValue] = useDebounceValue("", 900);
  const [content, setContent] = useState("");
  const ref = useRef(false);
  const { id } = useParams();
  useEffect(() => {
    const getNote = async () => {
      const note = await db.notes.where("id").equals(Number(id)).first();
      if (note) {
        setTitleValue(note.title);
        setContent(note.content);
      }
      {
        console.log(note);
      }
    };
    getNote();
  }, [id, setTitleValue]);

  useEffect(() => {
    let flag = true;
    const write = () => {
      if (flag) {
        db.notes
          .update(Number(id), { title: debouncedTitleValue })
          .then((updated) => {
            if (updated) {
              console.log("title updated");
            } else {
              console.log("title failed to update");
            }
          });
      }
    };
    if (ref.current) write();
    else ref.current = true;
    return () => {
      flag = false;
    };
  }, [debouncedTitleValue, id]);

  return (
    <div className="flex flex-col space-y-4">
      <Input
        onChange={(e) => setTitleValue(e.target.value)}
        defaultValue={debouncedTitleValue}
        className="text-lg border-none outline-none focus:outline-none"
        type="text"
        placeholder="Enter a Title"
      />
      <Editor content={content}/>
    </div>
  );
};

export default Note;
