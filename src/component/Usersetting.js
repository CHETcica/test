import React from "react";
import Carduser from "./Carduser";


const Usersetting = () => {
  
  return (
    <>
      <div className="rounded-lg  drawer drawer-end h-auto">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
          <div className="container mx-auto">
            <div className="grid">
              <Carduser />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay" />
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <h6>Max Distance</h6>
              <p className="ml-auto">40 km.</p>
              <input
                type="range"
                max="100"
                value="40"
                className="range range-primary"
              />
            </li>
            <hr className="m-3 " />
            <li>
              <h6>Min Age</h6>
              <p className="ml-auto">20 year</p>
              <input
                type="range"
                max="100"
                value="20"
                className="range range-primary"
              />
              <h6>max Age</h6>
              <p className="ml-auto">25 year</p>
              <input
                type="range"
                max="100"
                value="25"
                className="range range-primary"
              />
            </li>
            <hr className="m-3 " />
            <li>
              <h6>Passion</h6>
              <input
                type="checkbox"
                checked="checked"
                className="toggle toggle-primary ml-auto"
              ></input>
              <div className="mt-3 grid grid-flow-row grid-cols-2 gap-4 text-center">
                <div className="text-color-black card-actions-passion-primary">
                  Game
                </div>
                <div className="text-color-black card-actions-passion-primary ">
                  Game
                </div>
                <div className="text-color-black card-actions-passion-primary ">
                  Game
                </div>
                {/* <div className="text-color-black card-actions-passion-secondary ">
                  Game
                </div>
                <div className="text-color-black card-actions-passion-secondary ">
                  Game
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Usersetting;
