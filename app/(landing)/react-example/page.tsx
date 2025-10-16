"use client";

import { MyButton } from "@/components/sharing/my-button";

export default function Page() {
  const sayMyName = () => console.log("My name is vibol");
  const sayMyStudent = () => console.log("My studend is Dara");
  const sayMyTecher = () => console.log("My teacher is Piseth");

  return (
    <div className="space-x-2">
      <MyButton
        handleOnClick={sayMyName}
        variant="default"
        MyClassName="rounded-none"
      >
        Name
      </MyButton>
      <MyButton
        handleOnClick={sayMyStudent}
        variant="primary"
        MyClassName="rounded-full"
      >
        Student
      </MyButton>
      <MyButton handleOnClick={sayMyTecher} variant="error"
      MyClassName="hover:bg-green-400">
        Teacher
      </MyButton>
    </div>
  );
}
