import { Button } from 'reactstrap';

const ControlMenu=({save,isLoading})=> {
  return (
    <div className="control-menu">
      <h1 className="title">Write your story...</h1>
      <div className="status-box">
        {isLoading ? 'Saving...' : 'Saved'}
      </div> 
      <Button disabled={isLoading} onClick={save} color="success">Save</Button>
    </div>
  )
}

export default ControlMenu
