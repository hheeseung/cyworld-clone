import { ITextForm } from "../../types/type";

function TextForm({
  onTitleChange,
  onContentsChange,
  title,
  contents,
}: ITextForm) {
  return (
    <div className="container">
      <div>
        <input
          className="title"
          type="text"
          placeholder="제목을 입력하세요."
          onChange={onTitleChange}
          value={title}
          required
          autoFocus
        />
      </div>
      <div>
        <textarea
          className="contents"
          placeholder="내용을 입력하세요."
          onChange={onContentsChange}
          value={contents}
          required
        ></textarea>
      </div>
      <style jsx>{`
        .container {
          margin: 8px 0;
          padding: 8px;
          border: 1px solid #dddddd;
          height: 316px;
        }
        .title,
        .contents {
          width: 100%;
          border: 1px solid #ddd;
          padding: 5px;
        }
        .title:focus,
        .contents:focus {
          outline: none;
        }
        .title {
          margin-bottom: 15px;
        }
        .contents {
          height: 248px;
        }
      `}</style>
    </div>
  );
}
export default TextForm;
