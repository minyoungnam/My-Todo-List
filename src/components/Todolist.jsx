const Todolist = ({title, titleChangeHandler, contents, contentsChangeHandler}) => {
    return (
      <div className='writebox-style'>
      <label className='writelabel-style'>제목</label>
      <input className='input-style'
      value = {title}
      onChange = {titleChangeHandler}
      ></input>
      <label className='writelabel-style'>내용</label>
      <input className='input-style'
      value = {contents}
      onChange = {contentsChangeHandler}
      ></input>
      </div>
    )
  }
    export default Todolist;