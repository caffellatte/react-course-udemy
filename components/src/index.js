import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>
          Are you sure want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);