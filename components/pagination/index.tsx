import { Button } from "antd";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const Pagination = (props: Props) => {
    return (
        <div>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </div>
    );
};
