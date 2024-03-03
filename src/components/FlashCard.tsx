import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FlashCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>Flash Card #1</CardTitle>
          <CardDescription>Biology</CardDescription>
        </CardHeader>
        <CardContent>
          <p>What is the powerhouse of the cell?</p>
        </CardContent>
        <CardFooter>
          <p>Mitochondria</p>
        </CardFooter>
      </Card>
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>Flash Card #1</CardTitle>
          <CardDescription>Biology</CardDescription>
        </CardHeader>
        <CardContent>
          <p>What is the powerhouse of the cell?</p>
        </CardContent>
        <CardFooter>
          <p>Mitochondria</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FlashCard;
