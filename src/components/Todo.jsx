const Todo = ({item, clickRemoveButtonHandler, clickActionButtonHandler}) => {
    return (
      (
        <div key={item.id} className='todolistbox-style'>
        <div>
        <h2>{item.title}</h2>
        <div>{item.contents}</div> 
        </div>
        <div className='todolistbutton-style'>
        <button className='deletebutton-style' 
        onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
        <button className='actionbutton-style'
        onClick={() => clickActionButtonHandler(item.id)}>{item.isDone ? '취소' : '완료'}</button>
        </div>
        </div>
        )
    )
  }

  export default Todo;