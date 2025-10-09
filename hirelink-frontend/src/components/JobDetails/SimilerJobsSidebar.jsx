import React from "react";
import SimilerJobCard from "./SimilerJobCard";

function SimilerJobsSidebar() {
  return (
    <div className="border border-neutral-200 bg-background rounded-3xl p-5 flex flex-col gap-5 shadow-md">
      <div>
        <h3 className="font-medium text-text-primary">Jobs you might be interested in</h3>
      </div>
      <div className="flex flex-col gap-5">
        <SimilerJobCard />
        <SimilerJobCard />
        <SimilerJobCard />
      </div>
    </div>
  );
}

export default SimilerJobsSidebar;
