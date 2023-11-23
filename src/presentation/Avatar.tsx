import React from "react";

interface Props {
  link: string;
}

function Avatar(props: Readonly<Props>) {
  const { link } = props;

  console.log("link", link);

  return <div>Avatar</div>;
}

export default Avatar;
