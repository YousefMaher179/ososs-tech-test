import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
} from "draft-js";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const loadContent = async (): Promise<EditorState> => {
  await delay(1000);

  const mockContent: RawDraftContentState = {
    blocks: [
      {
        key: "sample",
        text: "Sample content loaded from API. Try making text bold, italic, or underlined.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [
          { offset: 58, length: 4, style: "BOLD" },
          { offset: 64, length: 6, style: "ITALIC" },
          { offset: 75, length: 10, style: "UNDERLINE" },
        ],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  };

  return EditorState.createWithContent(convertFromRaw(mockContent));
};

export const saveContent = async (editorState: EditorState): Promise<void> => {
  await delay(800);
  console.log("Content saved:", convertToRaw(editorState.getCurrentContent()));
};
