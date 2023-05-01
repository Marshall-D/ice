import '../../AppCss.css';

function HomeTable() {
    return (
          <table className="table" style={{width:"30px", cellspacing:"0", cellpadding:"0"}}>
        <tbody>
          <tr>
            <td className="td" style={{paddingRight:"10px", verticalAlign:"top"}}>
              {/* <img src="https://ice-bm.space/calendar1.jpg" 
              className='age'         

              /> */}
            </td>
            <td>
              <table className="table" width="auto" cellspacing="0" cellpadding="10" border="1">
                <tbody style={{boxSizing: "border-box"}}>
                  <tr>
                    <td className="td"  style={{paddingLeft:"10px"}}>
                      <p>Abstract/ Full Paper submission deadline</p>
                    </td>
                    <td style={{paddingLeft:"10px"}}>
                      <p>03th May 2023 </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{paddingLeft:"10px"}}>
                      <p>Notification of Acceptance/Rejection</p>
                    </td>
                    <td style={{paddingLeft:"10px"}}>
                      <p>Within 3 days of submission</p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{paddingLeft:"10px"}}>
                      <p>Final date of Registration</p>
                    </td>
                    <td style={{paddingLeft:"10px"}}>
                      <p>07th May 2023 </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{paddingLeft:"10px"}}>
                      <p>Conference Date</p>
                    </td>
                    <td style={{paddingLeft:"10px"}}>
                      <p>22nd - 26th May 2023 </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Note</strong>
                <br />
                * Notification of acceptance or rejection for the submitted
                paper will be notified to you within 4 working days of
                submission date.
                <br />
                ** If you are not getting any reply then, you can mail us to
                inquiry@blader.com. Mention your submitted Paper Code in the
                mail.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default HomeTable;