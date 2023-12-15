import "./Options.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputValue,
  setTag,
  setIncludeHtml,
} from "../../features/textgenerator/textSlice";

const Options = () => {
  const dispatch = useDispatch();

  const { paragraphs, tag, inputValue, includeHtml } = useSelector(
    (state) => state.text
  );

  const handleInputValue = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleTag = (e) => {
    dispatch(setTag(e.target.value));
  };

  const handleIncludeHtml = (e) => {
    dispatch(setIncludeHtml(e.target.value));
  };

  return (
    <div className="options">
      <div className="wrapper">
        <div className="optionsContainer">
          <div className="paragraphs">
            <p>Paragraphs: </p>
            <input
              type="number"
              min={1}
              max={10}
              value={inputValue}
              onChange={handleInputValue}
            />
          </div>
          <div className="tags">
            <p>Tags: </p>
            <select defaultValue={tag} onChange={handleTag}>
              <option value="p">&lt;p&gt;</option>
              <option value="h1">&lt;h1&gt;</option>
              <option value="h2">&lt;h2&gt;</option>
              <option value="h3">&lt;h3&gt;</option>
              <option value="h4">&lt;h4&gt;</option>
              <option value="h5">&lt;h5&gt;</option>
              <option value="h6">&lt;h6&gt;</option>
              <option value="span">&lt;span&gt;</option>
            </select>
          </div>
          <div className="include">
            <p>Include HTML: </p>
            <select defaultValue={includeHtml} onChange={handleIncludeHtml}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="copy">
          <CopyToClipboard
            text={paragraphs.map((paragraph) =>
              includeHtml === "Yes"
                ? `<${tag}>${paragraph} </${tag}>`
                : paragraph
            )}
          >
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Options;
