import React from "react";
import { MarkdownEditor, ReadmePreview } from "@/Components/GenerateReadme/index";
import { ReadmeProps } from "@/types/props";

const ReadmeContainer: React.FC<ReadmeProps> = ({ readme, setReadme }) => {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-5 overflow-hidden">
      <MarkdownEditor readme={readme} setReadme={setReadme} />
      <ReadmePreview readme={readme} />
    </div>
  );
};

export default ReadmeContainer;