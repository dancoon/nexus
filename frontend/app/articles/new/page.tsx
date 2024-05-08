import MyCustomCKEditor from "@/components/MyCustomCKEditor";
import Wrapper from "@/components/common/wrapper";
import React from "react";

export default function Home() {
  const isLoading = false;

  return (
    <Wrapper title="articles">
      <div className="block space-y-14 md:flex md:space-y-0">
        <MyCustomCKEditor />
      </div>
    </Wrapper>
  );
}
