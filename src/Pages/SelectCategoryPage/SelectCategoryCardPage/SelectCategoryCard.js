import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { APIContext } from './../../../contexts/APIProvider';

const SelectCategoryCard = ({ data }) => {
  // const { loading } = useContext(AuthContext);
  const {
    articleDetails,
    articleRead,
    articleSubmitDate,
    articleTitle,
    writerImg,
    writerName,
    articleImg,
    _id,
  } = data;
  const descriptionSlice =
    articleDetails?.length > 170
      ? articleDetails?.slice(0, 170) + "..."
      : articleDetails;
  //   if (loading) {
  //     return <Spinner />;
  //   }
  const {isDarkMode} = useContext(APIContext);
  return (
    <>
      <Link to={`/view-story/${_id}`}>
        <div className={isDarkMode ?"my-7 w-full mx-auto bg-gray-900 rounded-xl shadow-lg":"my-7 w-full mx-auto bg-white rounded-xl shadow-md"}>
          <div className="card-body md:flex">
            <div className="flex items-center">
              {/* blog auther img */}
              <img className="rounded-full w-10 h-10" src={writerImg} alt="" />
              <h3  className={isDarkMode ? "ml-2 font-bold text-gray-100":"ml-2 font-bold text-gray-900"}>{writerName}</h3>
            </div>
            <div
              className="lg:grid flex flex-col-reverse lg:flex-row"
              style={{ gridTemplateColumns: "4fr 2fr" }}
            >
              <div>
                <h1
                  className={isDarkMode ?"text-2xl font-semibold text-gray-100":"text-2xl font-semibold text-gray-800"}
                  dangerouslySetInnerHTML={{ __html: articleTitle }}
                />
                {/* {articleTitle}
                  </h1> */}
                <p className={isDarkMode ?"text-gray-100":"text-gray-900"} dangerouslySetInnerHTML={{ __html: descriptionSlice }} />
              </div>
              {/* blog right img */}
              <div className="flex justify-center items-center p-2 ">
                <img className="" src={articleImg} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <span className={isDarkMode ?"block text-gray-100 font-semibold":"block text-gray-700 font-semibold"}>
                {articleSubmitDate}
              </span>
              <span className="block ml-3 text-red-500 font-semibold">
                {articleRead}-read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SelectCategoryCard;
