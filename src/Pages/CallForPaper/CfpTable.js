import Td1 from './Td1';
import Td2 from './Td2';

function CfpTable() {
    return (
      <div>
        <table className='table' border="1" width="100%" style={{borderWidth: "0px"}}>
          <tbody>
            <tr>
              <Td1></Td1>
              <Td2></Td2>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  export default CfpTable;




