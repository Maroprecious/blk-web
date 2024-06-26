import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";

import { FiBold } from "react-icons/fi";
import { FiItalic } from "react-icons/fi";
import { FiUnderline } from "react-icons/fi";
import { IoListOutline } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";

import Underline from "@tiptap/extension-underline";
import { BsTypeStrikethrough } from "react-icons/bs";

import Text from "@tiptap/extension-text";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import { useCallback } from "react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,
      OrderedList,
      BulletList,
      Document,
      Paragraph,
      Text,
      Link,
      ListItem,
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "border-t border-[#e3e0de]  h-[424px] p-4 focus:outline-none",
      },
    },
  });

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("Enter a valid Url", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .toggleLink({ href: url, target: "_blank" })
      .run();
  }, [editor]);
  //   const [image, setImage] = useState<File | undefined>();

  return (
    <div className="w-full border relative  border-[#EAECF0] ">
      <EditorContent
        editor={editor}
        className="h-[134px] w-full "
        value="Enter the answer to the question"
      />
      <div className="bg-[#F9FAFB] px-2 flex items-center w-full  max-w-[340px] sm:max-w-[650px] md:max-w-full border-x  border-t border-[#E3E0DE] py-2 pl-2 gap-6 absolute overflow-x-auto -top-[49px] left-0">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={` w-8 h-8 flex items-center justify-center
          ${editor?.isActive("bold") ? "bg-[#E3E0DE]   rounded-md" : ""}
          `}
        >
          <FiBold size="24" color="#1D2939" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={` w-8 h-8 flex items-center justify-center
          ${editor?.isActive("italic") ? "bg-[#E3E0DE]   rounded-md" : ""}
          `}
        >
          <FiItalic size="24" color="#1D2939" />
        </button>
        <button
          onClick={() => editor?.chain().focus().setUnderline().run()}
          className={` w-8 h-8 flex items-center justify-center
          ${editor?.isActive("underline") ? "bg-[#E3E0DE]   rounded-md" : ""}
          `}
        >
          <FiUnderline size="24" color="#1D2939" />
        </button>

        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={` w-8 h-8 flex items-center justify-center
          ${editor?.isActive("strike") ? "bg-[#E3E0DE]   rounded-md" : ""}
          `}
        >
          <BsTypeStrikethrough size={24} className="text-2xl text-[#1D2939]" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={` w-8 h-8 flex items-center justify-center
          ${editor?.isActive("orderedList") ? "bg-[#E3E0DE]   rounded-md" : ""}
          `}
        >
          <IoListOutline size="24" color="#1D2939" />
        </button>
        {/* <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={` w-8 h-8 flex items-center justify-center 
          ${editor?.isActive("bulletList") ? "bg-[#E3E0DE] rounded-md" : ""}
          `}
        >
          <VscListUnordered size={24} className="text-2xl text-[#9c4e01]" />
        </button> */}
        <button
          onClick={setLink}
          className={` w-8 h-8 flex items-center justify-center 
          ${
            editor?.isActive("link")
              ? "bg-[#E3E0DE] rounded-md text-red-500"
              : ""
          }
          `}
        >
          <RiLinkM size="24" color="#1D2939" />
        </button>
      </div>
    </div>
  );
};

export default Tiptap;
