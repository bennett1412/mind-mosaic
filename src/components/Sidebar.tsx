import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "./ui/link";
import { db } from "@/db";
import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate()
  const notes = useLiveQuery(() => db.notes?.toArray());
  async function addNote() {
    try {
      const id = await db.notes.add({
        title: "",
        content: "",
      });
      navigate(`/notes/${id}`)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex my-2 p-2">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col">
          {notes?.map((note) => (
            <NavigationMenuItem key={note.id}>
              <Link className="" href={`/notes/${note.id}`}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  {note.title.length > 0 ? note.title : "New Note"}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
              <Button onClick={addNote}>+ Add a Note</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Sidebar;
