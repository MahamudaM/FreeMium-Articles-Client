import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { APIContext } from "../../../contexts/APIProvider";
import MembershipAndPayment from "../Settings/MembershipAndPayment";

const Saved = () => {
  const [visible, setVisible] = useState(true);
  const { isDarkMode } = useContext(APIContext);
  const hideMembershipBanner = () => {
    toast.success("Story Added in your List");
    setVisible((prev) => !prev);
  };
  return (
    <div>
      {visible && (
        <div
          className={`justify-center bg-no-repeat bg-cover bg-center rounded-lg flex flex-col py-6 font-medium pl-8 bg-green-600`}
          //   style={{ backgroundImage: `url(${MembershipAndPayment})` }}
        >
          <div className="flex justify-between items-center">
            <p
              className={
                isDarkMode ? "text-gray-900" : "text-white mb-4 text-lg"
              }
            >
              Create a list to easily organize and share stories
            </p>
            <button
              onClick={hideMembershipBanner}
              className={
                isDarkMode ? "text-gray-900 pr-6" : "text-gray-900 pr-6"
              }
            >
              X
            </button>
          </div>
          <button
            onClick={hideMembershipBanner}
            className="btn rounded-full w-2/6"
          >
            Start a list
          </button>
          {/* <Link to="/payment" className={isDarkMode ?"text-gray-900 underline":"underline text-gray-900"}>
            Start a list
          </Link> */}
        </div>
      )}
      <div className="card lg:card-side bg-base-200 mt-8">
        <div className="card-body">
          <h2 className="card-title">Reading list</h2>
          <p>7 stories</p>
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
        </div>
        {/* <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure> */}
      </div>
    </div>
  );
};

export default Saved;
