import React from "react";

type Props = {
  params: {
    categoryName: string;
  };
};

const CategoryPage = ({ params: { categoryName } }: Props) => {
  return <div>CategoryPage of {categoryName}</div>;
};

export default CategoryPage;
