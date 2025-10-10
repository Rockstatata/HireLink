import React from "react";

function SimilerJobCard() {
  return (
    <div className="border-b border-neutral-200 pb-3 hover:bg-background-secondary transition-colors duration-200 rounded-lg p-2 cursor-pointer">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-text-primary hover:text-primary transition-colors duration-200">Inside Sales Executive </p>
            <p className="text-[.78rem] font-medium text-text-secondary">
              Shining Stars Institution & travels
            </p>
          </div>
          <div>
            <div>
              <div className="flex gap-3 text-sm text-text-secondary">
                <span className="text-primary">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span>Noida,Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <div className="h-14 w-14 rounded-3xl border border-neutral-200 overflow-hidden flex justify-center items-center bg-background-secondary">
            <img src="https://img.naukri.com/logo_images/v3/302585.gif" />
          </div>
          <div>
            <span className="text-xs font-light text-text-muted">Posted 1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilerJobCard;
