const UserNumber = ({ number }) => {
  return `${number}, `;
};

const UserNumbers = ({ selectedNumbers }) => {
  return (
    <div>
      User's numbers:{' '}
      {selectedNumbers.map(number => 
        <UserNumber number={number} /> 
      )}
    </div>
  )
};

export default UserNumbers;