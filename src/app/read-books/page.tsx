"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/Type";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6B6B",
  "#C084FC",
  "#38BDF8",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      fill={color}
      stroke="none"
      strokeWidth={0}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  return <Label {...props} fill="white" />;
};

const ReadBooksPages = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: BookType, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold">Read Books</h1>

      <div className="flex justify-center">
        {readBooks.length > 0 ? (
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "400px",
            }}
            responsive
            data={data}
            margin={{
              top: 30,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />

            <XAxis dataKey="name" />

            <YAxis width="auto" />

            <Bar dataKey="uv" shape={TriangleBar}>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        ) : (
          <p className="text-center text-4xl font-bold">
            No read books to display..
          </p>
        )}
      </div>
    </div>
  );
};

export default ReadBooksPages;
