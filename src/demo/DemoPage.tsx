import React, { useState } from "react";
import { EditorState } from "draft-js";
import { WysiwygEditor } from "../components";
import { ToolbarProps } from "../types";
import { loadContent, saveContent } from "../utils";
import styles from "./DemoPage.module.css";

const DemoPage: React.FC = () => {
  const [controlledState, setControlledState] = useState(
    EditorState.createEmpty()
  );
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleLoad = async () => {
    setLoading(true);
    try {
      const content = await loadContent();
      setControlledState(content);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveContent(controlledState);
      alert("Content saved!");
    } finally {
      setSaving(false);
    }
  };

  const CustomToolbar: React.FC<ToolbarProps> = ({ editorState, onToggle }) => (
    <div className={styles.customToolbar}>
      <span>Custom:</span>
      <button onClick={() => onToggle("BOLD")}>Bold</button>
      <button onClick={() => onToggle("ITALIC")}>Italic</button>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>WYSIWYG EDITOR DEMO TEST (FOR OSOSS)</h1>
      <hr className={styles.divider} />

      <section className={styles.section}>
        <h2>Controlled Mode</h2>
        <div className={styles.buttons}>
          <button onClick={handleLoad} disabled={loading}>
            {loading ? "Loading..." : "Load"}
          </button>
          <button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
        <WysiwygEditor
          value={controlledState}
          onChange={setControlledState}
          placeholder="Controlled editor"
        />
      </section>

      <section className={styles.section}>
        <h2>Uncontrolled Mode</h2>
        <WysiwygEditor placeholder="Uncontrolled editor" />
      </section>

      <section className={styles.section}>
        <h2>Custom Toolbar</h2>
        <WysiwygEditor
          renderToolbar={(props) => <CustomToolbar {...props} />}
          placeholder="Custom toolbar editor"
          className={styles.customEditor}
        />
      </section>
    </div>
  );
};

export default DemoPage;
