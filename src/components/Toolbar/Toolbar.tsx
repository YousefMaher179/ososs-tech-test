import React from "react";
import { ToolbarProps } from "../../types";
import styles from "./Toolbar.module.css";

const ACTIONS = [
  { style: "BOLD", label: "Bold", icon: "B" },
  { style: "ITALIC", label: "Italic", icon: "I" },
  { style: "UNDERLINE", label: "Underline", icon: "U" },
];

const Toolbar: React.FC<ToolbarProps> = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className={styles.toolbar}>
      {ACTIONS.map((action) => (
        <button
          key={action.style}
          className={`${styles.button} ${
            currentStyle.has(action.style) ? styles.active : ""
          }`}
          onMouseDown={(e) => {
            e.preventDefault();
            onToggle(action.style);
          }}
          aria-label={action.label}
          type="button"
        >
          {action.icon}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
