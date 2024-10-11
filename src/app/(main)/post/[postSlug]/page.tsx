import React from "react";

type Props = {
  params: {
    postSlug: string;
  };
};

const CategoryPage = ({ params: { postSlug } }: Props) => {
  return <div>Post of slug: {postSlug}</div>;
};

export default CategoryPage;
