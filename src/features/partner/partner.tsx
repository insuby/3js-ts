import { FunctionComponent, memo } from "react";
import Image from "react-async-image";
import { PARTNER } from "shared/api";
import { Card } from "shared/ui";

export const Partner: FunctionComponent<PARTNER> = memo(({ name, image }) => {
  return (
    <Card variant="2">
      <Image
        src={`/static/images/${name.trim()}.png`}
        className="image"
        placeholder={<div className="placeholder">oops</div>}
      />
    </Card>
  );
});
