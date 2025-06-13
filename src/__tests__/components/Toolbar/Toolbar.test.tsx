import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { EditorState } from "draft-js";
import { Toolbar } from "../../../components";

const mockOnToggle = jest.fn();

describe("Toolbar", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockOnToggle.mockClear();
  });

  it("renders bold button", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    expect(screen.getByLabelText("Bold")).toBeInTheDocument();
  });

  it("renders italic button", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    expect(screen.getByLabelText("Italic")).toBeInTheDocument();
  });

  it("renders underline button", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    expect(screen.getByLabelText("Underline")).toBeInTheDocument();
  });

  it("calls onToggle when bold button is clicked", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    fireEvent.mouseDown(screen.getByLabelText("Bold"));
    expect(mockOnToggle).toHaveBeenCalledWith("BOLD");
  });

  it("calls onToggle when italic button is clicked", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    fireEvent.mouseDown(screen.getByLabelText("Italic"));
    expect(mockOnToggle).toHaveBeenCalledWith("ITALIC");
  });

  it("calls onToggle when underline button is clicked", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    fireEvent.mouseDown(screen.getByLabelText("Underline"));
    expect(mockOnToggle).toHaveBeenCalledWith("UNDERLINE");
  });

  it("prevents default on mouseDown", () => {
    const editorState = EditorState.createEmpty();
    render(<Toolbar editorState={editorState} onToggle={mockOnToggle} />);
    const boldButton = screen.getByLabelText("Bold");
    const mockPreventDefault = jest.fn();
    const mouseDownEvent = new MouseEvent("mousedown", { bubbles: true });
    mouseDownEvent.preventDefault = mockPreventDefault;
    fireEvent(boldButton, mouseDownEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
