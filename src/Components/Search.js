import React from "react";

const Search = () => {
  return (
    <div className="input pt-6">
      <input
        class="w-90 h-12 px-4 mb-2 text-lg text-black-900 placeholder-gray-600 border outline-pink-200 outline-hidden rounded-lg focus:shadow-outline"
        type="text"
        placeholder="Friend's Name..."
      /> 
    </div>
  );
};

export default Search;
