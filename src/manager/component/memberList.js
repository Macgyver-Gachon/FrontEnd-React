import "../manager.css";

const MemberListItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <>
      <section>
        <div className="memberManagePost">
          <div className="managerPostId">
            <p>{item.name}</p>
          </div>
          <div className="managerPostDay">
            <p>{item.email}</p>
          </div>
          <div className="managerPostDay">
            <p>{item.gender}</p>
          </div>
          <div className="managerPostModify">
            <button onClick={handleDeleteClick}>회원 삭제</button>
          </div>
        </div>
      </section>
    </>
  );
};

const MemberList = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item) => {
        return <MemberListItem item={item} onDelete={onDelete} />;
      })}
    </>
  );
};

export default MemberList;
