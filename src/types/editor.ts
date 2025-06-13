import React from "react";
import { EditorState } from "draft-js";

export interface ToolbarProps {
  editorState: EditorState;
  onToggle: (style: string) => void;
}

export interface WysiwygEditorProps {
  value?: EditorState;
  onChange?: (editorState: EditorState) => void;
  className?: string;
  style?: React.CSSProperties;
  renderToolbar?: (props: ToolbarProps) => React.ReactNode;
  placeholder?: string;
}
