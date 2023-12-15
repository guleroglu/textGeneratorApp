import "./Output.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setParagraphs } from "../../features/textgenerator/textSlice";

const Output = () => {
  const dispatch = useDispatch();
  const { paragraphs, tag, inputValue, includeHtml } = useSelector(
    (state) => state.text
  );
  console.log(inputValue);
  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setParagraphs(data)));
  }, [dispatch, inputValue]);

  return (
    <div className="output">
      {includeHtml === "Yes" ? (
        <p>{paragraphs.map((paragraph) => `<${tag}>${paragraph} </${tag}>`)}</p>
      ) : (
        <p>{paragraphs.map((paragraph) => paragraph)}</p>
      )}
    </div>
  );
};

export default Output;
