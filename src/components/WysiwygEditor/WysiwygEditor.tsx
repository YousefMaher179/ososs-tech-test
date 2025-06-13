import React, { useState, useCallback } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { WysiwygEditorProps } from "../../types";
import Toolbar from "../Toolbar";
import styles from "./WysiwygEditor.module.css";
import "draft-js/dist/Draft.css";

const WysiwygEditor: React.FC<WysiwygEditorProps> = ({
  value,
  onChange,
  className,
  style,
  renderToolbar,
  placeholder = "Start typing...",
}) => {
  const [internalState, setInternalState] = useState(() =>
    EditorState.createEmpty()
  );

  const isControlled = value !== undefined && onChange !== undefined;
  const editorState = isControlled ? value : internalState;

  const handleChange = useCallback(
    (newState: EditorState) => {
      if (isControlled) {
        onChange!(newState);
      } else {
        setInternalState(newState);
      }
    },
    [isControlled, onChange]
  );

  const handleToggleStyle = useCallback(
    (style: string) => {
      const newState = RichUtils.toggleInlineStyle(editorState, style);
      handleChange(newState);
    },
    [editorState, handleChange]
  );

  const toolbarProps = {
    editorState,
    onToggle: handleToggleStyle,
  };

  const containerClassName = `${styles.editor} ${className || ""}`.trim();

  return (
    <div className={containerClassName} style={style}>
      {renderToolbar ? (
        renderToolbar(toolbarProps)
      ) : (
        <Toolbar {...toolbarProps} />
      )}
      <div className={styles.content}>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default WysiwygEditor;
