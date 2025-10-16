"use client";

// biome-ignore assist/source/organizeImports: <explanation>
import { Button } from "@/components/ui/button";
import { useHook } from "./useHook";

export default function HookExplain() {
 // custom hook
  const {count, setCount, sum, increaseSum} = useHook();

  return (
    <div>
      Count from React Hook {count}
      <hr />
      <Button onClick={() => setCount((prve) => prve + 1)}>
        Click to increase count from React Hook
      </Button>
      <hr/>
      Sum: {sum}
      <hr />
      <Button onClick={increaseSum}>Increase sum</Button>
    </div>
  );
}
